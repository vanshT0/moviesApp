import React from 'react';
import MoviesTable from '../../components/moviesTable/moviesTable';
import NavBar from '../../components/navBar/navBar';
import Pagination from '../../components/pagination/pagination';
import SideBar from '../../components/sideBar/sideBar';
import "./moviesList.css"

import axios from 'axios';
import Loader from '../../components/loader/loader';
import { HandleGetMovies } from './dataManager';

class MoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1,
            "rating" : "all",
            data:[],
            loader: true
        };
    }

    async componentDidMount(){
        let data = await HandleGetMovies();
           this.setState({
               data: data,
               loader: false 
           });
        
    }


    changeSearch = (e) => {
        this.setState({
            pageNumber: 1,
            search: e.target.value
        })
    }

    changePage = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        });
    }

    changeRating  = (e) => {
        this.setState({
            pageNumber: 1,
            "rating": e.target.value === "all" ? "all" : parseInt(e.target.value)
        })
    }


    render() {
let data = this.state.data;
        // let data = [{
        //     "sno": 1,
        //     "name": "Human Centipide",
        //     "genre": "Comedy",
        //     "rating": 5

        // },
        // {
        //     "sno": 2,
        //     "name": "Cannibal Holocaust",
        //     "genre": "Romance",
        //     "rating": 5

        // }, {
        //     "sno": 3,
        //     "name": "Platform",
        //     "genre": "Thriller/Sci-f",
        //     "rating": 5

        // }, {
        //     "sno": 4,
        //     "name": "Evil Dead",
        //     "genre": "Romantic",
        //     "rating": 2

        // }, {
        //     "sno": 5,
        //     "name": "Shawshank Redemption",
        //     "genre": "Drama/Crime",
        //     "rating": 4

        // }
        //     ,
        // {
        //     "sno": 6,
        //     "name": "Saving Private Ryan",
        //     "genre": "War/Action",
        //     "rating": 4

        // }
        // ,
        // {
        //     "sno": 7,
        //     "name": "Titanic",
        //     "genre": "War/Action",
        //     "rating": 4

        // }
        // ,
        // {
        //     "sno": 8,
        //     "name": "Hocus Pocus",
        //     "genre": "War/Action",
        //     "rating": 4

        // }
        // ,
        // {
        //     "sno": 9,
        //     "name": "Stuart Little",
        //     "genre": "War/Action",
        //     "rating": 4

        // }
        // ,
        // {
        //     "sno": 10,
        //     "name": "Godfather",
        //     "genre": "War/Action",
        //     "rating": 4

        // }

        //     , {
        //     "sno": 11,
        //     "name": "Prince of Persia",
        //     "genre": "Adventure",
        //     "rating": 3

        // }, {
        //     "sno": 12,
        //     "name": "Intersteller",
        //     "genre": "Sci-fi",
        //     "rating": 4

        // }, {
        //     "sno": 13,
        //     "name": "Pursuit of Happiness",
        //     "genre": "Comedy",
        //     "rating": 4

        // },
        // {
        //     "sno": 14,
        //     "name": "Inception",
        //     "genre": "Sci-fi",
        //     "rating": 5

        // }, {
        //     "sno": 15,
        //     "name": "La La Land",
        //     "genre": "Romantic",
        //     "rating": 3

        // }, {
        //     "sno": 16,
        //     "name": "Joker",
        //     "genre": "Crime",
        //     "rating": 4

        // }, {
        //     "sno": 17,
        //     "name": "Parasite",
        //     "genre": "Thriller",
        //     "rating": 3

        // },
        // {
        //     "sno": 18,
        //     "name": "The Revenant",
        //     "genre": "Adventure",
        //     "rating": 4

        // }, {
        //     "sno": 19,
        //     "name": "Back to the Future",
        //     "genre": "Sci-fi",
        //     "rating": 2

        // }, {
        //     "sno": 20,
        //     "name": "Conjuring",
        //     "genre": "Horror",
        //     "rating": 2

        // }
        // ];

        let filteredData = data.filter((movie) => {
            if (this.state.rating !== "all") {
                return movie.rating === this.state.rating;
            }
            return true;
        })

        
        filteredData = filteredData.filter((movie) => {

            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();

            return movieName.includes(search);
        });



        let finalData = [];
        for (let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber * 5) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);

        }



        return (
            <div className="main-container">
                {this.state.loader ? <Loader /> :""}
               
                <NavBar />
                <SideBar />

                <div className="movie-table-container">
                    <div className="filters">
                        <input value={this.state.search} className="search" placeholder="  What are you looking for ?" type="text" onChange={this.changeSearch} />
                        <select className="rating-dropdown" name="rating" onChange ={this.changeRating} >
                            <option value={"all"} selected>All Rating</option>
                            <option value={0}>0 stars</option>
                            <option value={1}>1 stars</option>
                            <option value={2}>2 stars</option>
                            <option value={3}>3 stars</option>
                            <option value={4}>4 stars</option>
                            <option value={5}>5 stars</option>

                        </select>
                    </div>
                    <MoviesTable data={finalData} />

                    <Pagination totalMovies={filteredData.length} changePage={this.changePage} />

                </div>
            </div>
        )
    }


}

export default MoviesList;