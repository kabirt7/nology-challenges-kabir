// ## Challenge: Find sets of data in the movie set

class Movie {
  constructor(name, director, release, imdbRating, runtime) {
    this.name = name;
    this.director = director;
    this.release = release;
    this.imdbRating = imdbRating;
    this.runtime = runtime;
  }
}

const movies = [
  new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
  new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
  new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38"),
];

// Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.release >= 2000));

// Get all movies director begins with T
//console.log(movies.filter((movie) => movie.name[0] === ("T" || "t")));
console.log(movies.filter((movie) => movie.director.startsWith("t")));

// Get the first movie in the list where the name contains "the"
console.log(
  movies.filter(
    (movie) => movie.name.includes("the") || movie.name.includes("The")
  )
);
// Get the total run time of all movies in seconds
console.log(
  movies.map((movie) => {
    const timeSplit = movie.runtime.split("h");
    const hours = timeSplit[0];
    const minutes = timeSplit[1].slice(0, 2);
    const timeInSeconds = hours * 60 ** 2 + minutes * 60;
    return timeInSeconds;
  })
);

// get the average imdb rating of all movies in the set
console.log(
  movies.reduce((acc, curr) => {
    acc += curr.imdbRating;
    return acc;
  }, 0) / movies.length
);

// Get the newest movie
console.log(movies[movies.length - 1]);

console.log();

// Get movies that have a greater run time that 90mins
console.log(
  movies.filter((movie) => {
    const timeSplit = movie.runtime.split("h");
    const hours = Number(timeSplit[0]);
    const minutes = Number(timeSplit[1].slice(0, 2));
    const timeInMinutes = hours * 60 + minutes;
    if (Number(timeInMinutes > 90)) {
      return movie;
    } else {
      return null;
    }
  })
);
