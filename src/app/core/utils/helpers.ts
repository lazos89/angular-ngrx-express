export const calcMin = (values: number[], dates: string[]) => {
  const min = Math.min(...values);
  return {
    date: dates[values.indexOf(min)] as string,
    value: Math.min(...values)
  };
};
export const calcMax = (values: number[], dates: string[]) => {
  const max = Math.max(...values);
  return {
    date: dates[values.indexOf(max)] as string,
    value: Math.max(...values)
  };
};
export const calcAverage = (values: number[], dates: string[]) => {
  const avg = values.reduce((a, b) => a + b) / values.length;
  return {
    date: dates.indexOf[avg] as string,
    value: avg
  };
};
