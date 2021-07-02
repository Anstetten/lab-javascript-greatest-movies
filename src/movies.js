const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: ''
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Steven Spielberg',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: {}
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Steven Spielberg',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  }
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let listOfDirectors = movies.map(movie => movie.director);
  let directorsWithoutDuplicates =[];

  listOfDirectors.forEach(director => { if (!directorsWithoutDuplicates.includes(director)) directorsWithoutDuplicates.push(director);})

  return directorsWithoutDuplicates;

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let dramaMoviesOfSpielberg = movies.filter(movie =>{
    if (movie.director==="Steven Spielberg" && movie.genre.includes("Drama")) return movie;
  })

  return dramaMoviesOfSpielberg.length;

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length===0 ) return 0;

  let totalScore=movies.reduce((totalPoints, movie)=>{
    
    if(typeof(movie.score)==="number")
      {return totalPoints+movie.score;}
      else{return totalPoints+0;} 
    },0);
  return parseFloat((totalScore/movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length===0 ) return 0;
  let dramaMovies=movies.filter(movie=>{if (movie.genre.includes("Drama")) return movie;})
  if(dramaMovies.length===0) return 0;
  let totalScore=dramaMovies.reduce((totalPoints, movie)=>{
    
    if(typeof(movie.score)==="number")
      {return totalPoints+movie.score;}
      else{return totalPoints+0;} 
    },0);
  return parseFloat((totalScore/dramaMovies.length).toFixed(2));

}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let stringifiedMovies= JSON.stringify(movies);
  let newMovies = JSON.parse(stringifiedMovies);

  return newMovies.sort((a,b)=>{
    if (a.year < b.year) {return -1;}
    if (a.year > b.year) {return 1;}
  
    if(a.title<b.title) {return -1;}
    if(a.title>b.title) {return 1;}
    return 0;});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
