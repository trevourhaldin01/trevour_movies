 
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    }
};

export const fetchAllMovies = async ()=>{
    const url = 'https://movies-api14.p.rapidapi.com/movies';
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("error fetching movies:",error);
        
    }
};

export const fetchAllData = async ()=>{
    const url = 'https://movies-api14.p.rapidapi.com/home';

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error fetching movies:",error);
    }
}

export const getMovieById = async (id)=>{
    const url = `https://movies-api14.p.rapidapi.com/movie/${id}`;
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("error feching movie",error);
        
    }
}
export const searchMovie = async (query) =>{
    const url = `https://movies-api14.p.rapidapi.com/search?query=${query}`;
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("No movie found",error);
    }
}