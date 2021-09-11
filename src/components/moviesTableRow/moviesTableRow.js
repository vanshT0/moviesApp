import React from 'react';
import Rating from '../rating/rating';
import "./moviesTableRow.css";
class MoviesTableRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { sno, name, genre, trailer, thumbnail, rating } = this.props.data;
        return (
            <div className="movies-table-row" style={this.props.header ? { fontWeight: "bold" } : {}}>

                <div className="top-row">
                    <div className="column thumbnail"><img className="trailer-image" src={thumbnail} alt="trailer" /></div>

                </div>


                <div className="mid-row">
                    
                <div className="mid-row-one">
                    <div className="column serial-number">{sno} .</div>

                    <div className="column movie-name">{name}</div>
                    </div>

                    <div className="mid-row-two">
                    <div className="column genre">{genre}</div>
                    <div className="column rating">{this.props.header ? rating : <Rating rating={rating} />}</div>

                   
                    </div>

                   

                    <div className="column trailer">
                        {this.props.header ? trailer : <a href={trailer}>
                            Trailer
                        </a>}
                    </div>
                </div>




            </div>
        )
    }

}

export default MoviesTableRow;