import { DatabaseCriteria } from "./index.js";

type Cat = {
  name: string;
  age: number;
}

test("`DatabaseCriteria` can be created", () => {
  const criteria = new DatabaseCriteria<Cat, 'name'>('name', "EQ", "Plume");
  expect(criteria).toBeDefined();
  const criteria2 = new DatabaseCriteria<Cat, 'age'>('age', "GTE", 15);
  expect(criteria2).toBeDefined();
});
