import React, {Component} from 'react';
import MovieCard from './MovieCard';
import Axios from 'axios';
import queryString from 'query-string';

class MovieList extends Component {
    state = {movies: []}

    componentDidMount() {
        this.fetchMovies();
        console.log('this.props', this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=aa9e49f&s=${q.searchText}`)
            .then(res => {
                console.log(res.data.Search)
                this.setState({movies: res.data.Search})
            })

    }

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    submitHandler = (evt) => {
        let {history} = this.props;
        history.push('/movies?searchText=' + this.state.search);
    }

    render() {
        const movieList = this.state.movies ?
            this.state.movies.map((m, index) => <MovieCard movie={m} key={index} />)
            :
            []
        return (
            <div className="row">
                <div className="col-md-10 col-xs-10">
                    <input type="search"
                           ref="searchTf"
                           placeholder="Search..."
                           className="form-control"
                           onChange={(e)=>this.handleSearchChange(e)}
                    />
                </div>
                <div className="col-md-2 col-xs-2 text-right">
                    <button
                        className='btn btn-secondary'
                        onClick={ () => this.submitHandler(this) }
                    >
                        Search
                    </button>
                </div>
                <br/><br/>
                {movieList}
            </div>
        );
    }
}

export default MovieList;
