/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = +budget;
  }
  wasExpensive() {
    if (this.budget > Math.pow(10, 8)) {
      return true;
    } else {
      return false;
    }
  }
}

const movie1 = new Movie('The Godfather', 'Francis Ford Coppola', 6000000);
const movie2 = new Movie(
  'Avatar: The Way of Water',
  'James Cameron',
  237000000
);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
