import moment from 'moment';
import restaurants from "../data/restaurants";

export function getLocation() {
  return restaurants.map((restaurant) => restaurant.name);
}

export function getDays(location: string) {
  // console.log(restaurants.filter((restaurant) => restaurant.name === location))
  return Object.keys(restaurants.filter((restaurant) => restaurant.name === location)[0]
  .schedulesByDate);
}
export function getHours(location:string, day: string) {
  console.log(location, day);
  console.log(restaurants.filter((restaurant) => restaurant.name === location)[0]
  .schedulesByDate)
  return restaurants.filter((restaurant) => restaurant.name === location)[0]
  .schedulesByDate[moment(day,'DD dddd').format("YYYY-MM-DD")]
}