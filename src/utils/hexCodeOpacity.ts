const hexCodeOpacity = (percentage: number) =>
  Math.round((percentage / 100) * 255)
    .toString(16)
    .padStart(2, "0");


export default hexCodeOpacity