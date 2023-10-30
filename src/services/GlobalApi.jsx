import axios from "axios";



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjBhODhiYjNhOTcxMDBjZjA1NzhlNDhjMzZmNTNkNSIsInN1YiI6IjY0ZjllM2Q5YTg0YTQ3MDEwMGQ0NmVlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOMWh32ZX_mW4POjwXfuCJ1tJiI3u0rk2HKjMGQV1Ts'
    }
  };
  
const movieBaseURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en&page=1&sort_by=popularity.desc&without_genres=18'

const tvBaseURL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en&page=1&sort_by=popularity.desc'

    const getDisneyFilms = axios.get(movieBaseURL+'&with_companies=disney&with_genres=16', options)
    // .then(response => console.log(response))
    // .then(response => response.data)
    // // .catch(err => console.error(err));


    const getMyFilms = axios.get(movieBaseURL, options)
      const getMovieByGenreId =(id) => 
      axios.get(movieBaseURL+"&with_genres="+id)
    // .then(response => response.data)
    // .then(response => console.log(response))
    // .catch(err => console.error(err));

    const getMyTV = axios.get(tvBaseURL, options)
      const getTVByGenreId =(id) => 
      axios.get(tvBaseURL+"&with_genres="+id)
    // .then(response => response.data)
    // // .then(response => console.log(response))
    // .catch(err => console.error(err));


export default {
    getDisneyFilms,
    getMyFilms,
    getMyTV
}