'use strict'

var movies = []
let attempts = parseInt(prompt("enter the number of movies you want to rate."))
for (let i = 0; i < attempts; i++){
    let title = prompt("give movie tittle")
    let rating = parseInt(prompt("give movie rating 1-5"))
    let object = {
        title : title,
        rating : rating
        }
    movies.push(object)
}
let new_array = movies.sort((a,b) => b.rating-a.rating)
console.log(new_array)
