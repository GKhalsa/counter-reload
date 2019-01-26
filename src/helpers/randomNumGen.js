const randomNumberBetween = (low, high) =>
low + Math.floor((1+high-low) * Math.random())

export const getNewValue = () =>
    randomNumberBetween(1, 10)
