import React from 'react';
//import data from "./gallery/test.js";
import "../styles/GalleryEntry.css"

class GalleryEntry extends React.Component
{

    render()
    {
        var val = "lol";

    return(
        <div className="GalleryEntry">
            <a href={this.props.url}>
                <div className="galleryPage">
                    <img src={this.props.img}/>
                    <p className="pageTitle">{this.props.title}</p>
                </div>
            </a>
        </div>
    )
    }
} export default GalleryEntry