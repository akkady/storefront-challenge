const useCalculateCartTotal = (cartEntries) => {
  return cartEntries.reduce((accumulator, entry) => {
    const { quantity, price } = entry;
    return accumulator + quantity * price;
  }, 0);
};

export default useCalculateCartTotal;
