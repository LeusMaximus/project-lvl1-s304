/**
 * Returns a random integer between min (inclusive) and max (not including max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

/**
 * Get greatest common divisor of two integer numbers
 * @param {number} m
 * @param {number} n
 */
export const getGcd = (m, n) => {
  const minValue = Math.min(m, n);
  const maxValue = Math.max(m, n);

  const iter = (max, min) => {
    const newMax = min;
    const newMin = max % min;

    if (newMin === 0) {
      return min;
    }

    return iter(newMax, newMin);
  };

  return iter(maxValue, minValue);
};

export const isEven = number => number % 2 === 0;
