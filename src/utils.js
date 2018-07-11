/**
 * Returns a random integer between min (inclusive) and max (not including max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = number => number % 2 === 0;
