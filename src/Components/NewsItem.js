import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor() {
        super();
    }
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='news-item' style={{ margin: "0 auto" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={imageUrl} style={{ width: "18rem" }} alt="Card image cap" />
                    <div className="card-body">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                            {source}
                            <span className="visually-hidden">source</span>
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary btn-dark">Read more</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}