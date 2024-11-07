type Comparator = "EQ" | "LT" | "LTE" | "GT" | "GTE";

export class DatabaseCriteria<T, K extends keyof T, V = T[K]>   {
  constructor(public field: K, public comparator: Comparator, public value: V) {}
} 
