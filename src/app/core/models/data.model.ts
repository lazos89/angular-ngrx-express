export interface Data {
  [key: string]: Array<Array<number | string>>;
}

export interface SummaryValues {
  min: {
    date: string;
    value: number;
  };
  max: {
    date: string;
    value: number;
  };
  average: {
    value: number;
  };
  last: {
    date: string;
    value: number;
  };
}
