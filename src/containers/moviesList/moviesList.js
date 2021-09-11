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
            flag: false,
            "rating" : "all", 
            "genre": "All Genre",
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
            search: e.target.value,
            flag: true
        })
    }


    changeRating  = (e) => {
        this.setState({
            pageNumber: 1,
            flag: true,
            "rating": e.target.value === "all" ? "all" : parseInt(e.target.value)
        })
    }

    changeGenre = (e) => {
        this.setState({
            pageNumber: 1,
            flag: true,
            "genre": e.target.value
        })
    }

    changeGenreS = (genre) => {
        this.setState({
            pageNumber: 1,
            flag: true,
            "genre": genre
        })
    }

    changePage = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        })
    }


    render() {
let data = this.state.data;
      
        let filteredData = data.filter((movie) => {
            if (this.state.rating !== "all") {
                return movie.rating === this.state.rating;
            }
            return true;
        })

        filteredData = filteredData.filter((movie) => {
            if (this.state.genre !== "All Genre") {
                return movie.genre === this.state.genre;
            }

            return true;
        });
        
        filteredData = filteredData.filter((movie) => {

            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();

            return movieName.includes(search);
        });

      

     

        let finalData = [];
        for (let i = (this.state.pageNumber - 1) * 4; i < (this.state.pageNumber * 4) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);

        }



        return (
            <div className="main-container">
                {this.state.loader ? <Loader /> :""}
               
                <NavBar />
                <SideBar genre={this.state.genre} changeGenre={this.changeGenreS}/>

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


                        <select className="genre-dropdown" name="genre" onChange={this.changeGenre}>
                            <option value={"All Genre"} selected>All Genre</option>
                            <option value={"Drama"}>Drama</option>
                            <option value={"Crime"}>Crime</option>
                            <option value={"Action"}>Action</option>
                            <option value={"War"}>War</option>
                            <option value={"Sci-fi"}>Sci-fi</option>
                            <option value={"Comedy"}>Comedy</option>
                            <option value={"Romance"}>Romance</option>
                            <option value={"Horror"}>Horror</option>
                            <option value={"Thriller"}>Thriller</option>
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