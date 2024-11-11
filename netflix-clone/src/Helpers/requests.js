const API_KEY = "1f79f4eef2afcf2b501763010e5632f2"

export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals : `discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchDocumentaries : `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchApp:`discover/movie?api_key=${API_KEY}`
};