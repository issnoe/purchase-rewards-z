const { groupByKey, handleIterObject } = require("../utils");
const mock = [
  {
    id: 1,
    userId: 1,
    amount: 20,
    month: "oct",
  },
  {
    id: 2,
    userId: 2,
    amount: 50,
    month: "oct",
  },
  {
    id: 3,
    userId: 2,
    amount: 50,
    month: "jan",
  },
  {
    id: 4,
    userId: 2,
    amount: 50,
    month: "feb",
  },
];

test("groupByKey -> Empty exeption", () => {
  expect(() => groupByKey("month", null)).toThrow();
});

test("groupByKey -> Group by month 'feb' ", () => {
  const objectBykey = groupByKey("month", mock);
  const objectBykeySegement = objectBykey["feb"];
  console.dir([objectBykey, objectBykeySegement]);
  expect(objectBykeySegement).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 4,
        userId: 2,
        amount: 50,
        month: "feb",
      }),
    ])
  );
});

test("groupByKey -> Group by userId '1' ", () => {
  const objectBykey = groupByKey("userId", mock);
  const objectBykeySegement = objectBykey["2"];
  console.dir([objectBykey, objectBykeySegement], {});
  expect(objectBykeySegement).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 2, userId: 2, amount: 50, month: "oct" }),
    ])
  );
});

test("handleIterObject -> Empty callback", () => {
  expect(() => {
    handleIterObject({ 1: {}, 2: {} }, null);
  }).toThrow();
});
test("handleIterObject -> Mutation on iteration", () => {
  const result = handleIterObject({ 1: { a: "1" }, 2: { a: "2" } }, (item) => {
    return `x${item.a}`;
  });
  console.log(result);
  expect(result).toEqual({ 1: "x1", 2: "x2" });
});
