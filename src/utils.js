/**
 * Returns a random integer between min (inclusive) and max (not including max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

export default getRandomInt;
