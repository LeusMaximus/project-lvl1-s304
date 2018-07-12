export const gcd = (m, n) => {
  const min = Math.min(m, n);
  const max = Math.max(m, n);

  const iter = (acc) => {
    if (max % acc === 0) {
      return acc;
    }

    return iter(Math.floor(acc / 2));
  };

  return iter(min);
};