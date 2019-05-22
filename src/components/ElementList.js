import React from 'react';
import noImage from '../img/no-image.jpg';

class ElementList extends React.Component {

 

    imageMuvie() {
        if (this.props.show.image !== null || this.props.show.image !== undefined) {
            // if (this.props.show.image['medium'] !== null || this.props.show.image['medium'] !== undefined) {
            //     // return this.props.show.image['medium'];
            //     console.log(this.props.img['medium'])
            //     // return this.props.img['medium'];
            // } else {
            //     return noImage;
            // }
            return this.props.img['medium'];

        } else {

            return noImage;
        }
    }


    genresMuvie() {
        if (this.props.show.genres.length > 0) {
            return this.props.show.genres.join(', ');
        }
        else {
            return "No-ifo";
        }

    }


    render() {

        // console.log(this.props.show.genres);

        return (
            <div className="movie">
                <img className="movie-img" src={this.imageMuvie()} alt="movie" />
                <h2 className="movie-name">{this.props.show.name}</h2>
                <p className="movie-year">{this.props.year}</p>
                <p className="movie-genres">{this.genresMuvie()}</p>
            </div>
        )
    }

}

export default ElementList;