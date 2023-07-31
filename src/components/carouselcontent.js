import React, { Component } from 'react'

export default class Carouselcontent extends Component {
    render() {
        const images = this.props.images;
        const data = this.props.data;

        return (
            <>
            <div>
                <div>
                    <h1> {data.title} </h1>
                    <section>
                        {data.content}
                    </section>
                </div>
                <div className='carousel-container'>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {images.map((img, index) =>
                                <div 
                                key={index} 
                                className={index === 0 ? 'carousel-item active' : "carousel-item"}>
                                    <img src={img} alt={index}/>
                                </div>
                            )}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
