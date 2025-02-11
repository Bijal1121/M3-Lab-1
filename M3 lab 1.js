// Step 1: Create a string array of favorite Bollywood movies and display the second movie
let favoriteMovies = ["3 Idiots", "Zindagi Na Milegi Dobara", "Gully Boy", "Dil Chahta Hai", "Lagaan"];
console.log(favoriteMovies[1]); 

// Step 2: Declare an array using the constructor method and display the first movie
let movies = new Array(5);
movies[0] = "3 Idiots";
movies[1] = "Zindagi Na Milegi Dobara";
movies[2] = "Gully Boy";
movies[3] = "Dil Chahta Hai";
movies[4] = "Lagaan";
console.log(movies[0]); 

// Step 3: Add a new movie to the 3rd position and display the length
movies.splice(2, 0, "Taare Zameen Par");
console.log(movies.length); 

// Step 4: Declare an array using literal notation and delete the first movie
let moviesList = ["3 Idiots", "Zindagi Na Milegi Dobara", "Gully Boy", "Dil Chahta Hai", "Lagaan"];
delete moviesList[0];
console.log(moviesList); 

// Step 5: Declare an array of 7 Bollywood movies and iterate using a for/in loop
let movies7 = ["3 Idiots", "Zindagi Na Milegi Dobara", "Gully Boy", "Dil Chahta Hai", "Lagaan", "Swades", "Dangal"];
for (let index in movies7) {
    console.log(movies7[index]);
}

// Step 6: Use a for/of loop to iterate through the array
for (let movie of movies7) {
    console.log(movie);
}

// Step 7: Display movies in sorted order using for/of loop
for (let movie of movies7.sort()) {
    console.log(movie);
}

// Step 8: Create a least favorite movies array and display formatted output
let leastFavMovies = ["Tees Maar Khan", "Humshakals", "Himmatwala"];
console.log("\nMovies I like:\n");
for (let movie of movies7) {
    console.log(movie);
}
console.log("\nMovies I regret watching:\n");
for (let movie of leastFavMovies) {
    console.log(movie);
}

// Step 9: Merge both arrays and display in reverse order
let allMovies = movies7.concat(leastFavMovies);
console.log(allMovies.reverse());

// Step 10: Return the last item in the array
console.log(allMovies[allMovies.length - 1]);

// Step 11: Return the first item in the array
console.log(allMovies[0]);

// Step 12: Replace disliked movies with new ones
let indices = leastFavMovies.map(movie => allMovies.indexOf(movie)).filter(index => index !== -1);
indices.forEach((index, i) => {
    allMovies[index] = ["Andhadhun", "Drishyam", "Queen"][i];
});
console.log(allMovies);

// Step 13: Multi-dimensional array with rankings
let rankedMovies = [
    ["3 Idiots", 1], ["Zindagi Na Milegi Dobara", 2], ["Gully Boy", 3], 
    ["Dil Chahta Hai", 4], ["Lagaan", 5]
];
let movieNames = rankedMovies.filter(item => typeof item[0] === "string").map(item => item[0]);
console.log(movieNames);

// Step 14: Employees array and function to display them
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function(empArray) {
    console.log("\nEmployees:\n");
    for (let emp of empArray) {
        console.log(emp);
    }
};
showEmployee(employees);

// Step 15: Function to filter false, null, 0, and blank values
function filterValues(arr) {
    return arr.filter(value => value);
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0])); 

// Step 16: Function to get a random item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Step 17: Function to get the largest number in an array
function getLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(getLargestNumber([11, 22, 33, 44, 111, 88])); 
