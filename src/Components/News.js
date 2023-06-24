import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = [];
    noImageUrl = "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900030/86470279-breaking-news-background-world-global-tv-news-banner-design.jpg";
    noDescription = "Read this news by clicking on the read more button. News Panda brings you all the latests news from the web."
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            loading: false
        }
        document.title = `${this.props.category} - NewsPanda`;
    }
    handlePrevChange = async () => {
        this.setState({loading: true});
        console.log("prev");
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
    }
    handleNextChange = async () => {
        this.setState({loading: true});
            console.log("next");
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
    }
    async componentDidMount() {
        this.setState({loading: true});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalPageSize: parsedData.totalResults, loading:false});
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsPanda's Top Headlines</h1>
                <div className='text-center'>
                {this.state.loading && <Spinner/>}
                </div>
                <div className="row">
                    {this.state.articles.map((element) => {
                        let { title, description, urlToImage, url, author, publishedAt, source } = element
                        return (
                            !this.state.loading && <div className='col-md-4' key={url}>

                                <NewsItem title={title ? title.slice(0, 90) : ""} description={description ? description.slice(0, 140) + "..." : this.noDescription.slice(0, 160) + "..."} imageUrl={!urlToImage ? this.noImageUrl : urlToImage} newsUrl={url} author={author} date={publishedAt} source={source.name}/>

                            </div>
                        )
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevChange} type="button" className="btn btn-dark ">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalPageSize /this.props.pageSize)} onClick={this.handleNextChange} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}