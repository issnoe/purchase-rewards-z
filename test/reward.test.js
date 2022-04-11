const { Reward } = require("../RewardClass");
const { handleIterObject } = require("../utils");

test("pointsRewardCompute", () => {
  expect(Reward.getPointsRewardCompute(200)).toBe(250);
  expect(Reward.getPointsRewardCompute(190)).toBe(230);
  expect(Reward.getPointsRewardCompute(150)).toBe(150);
  expect(Reward.getPointsRewardCompute(120)).toBe(90);
  expect(Reward.getPointsRewardCompute(101)).toBe(52);
  expect(Reward.getPointsRewardCompute(70)).toBe(20);
  expect(Reward.getPointsRewardCompute(51)).toBe(1);
});

test("Summary list of purchases in base points reward", () => {
  const list = [
    { id: 1, userId: 1, amount: 51, month: "oct" },
    { id: 1, userId: 1, amount: 101, month: "oct" },
  ];
  expect(Reward.summaryPoints(list)).toBe(53);
});

test("Resume and summary amount by months", () => {
  const ob = {
    oct: [{ id: 1, userId: 1, amount: 20, month: "oct" }],
    feb: [{ id: 3, userId: 1, amount: 121, month: "feb" }],
    mar: [{ id: 4, userId: 1, amount: 120, month: "mar" }],
    jan: [{ id: 5, userId: 1, amount: 130, month: "jan" }],
  };

  const result = handleIterObject(ob, Reward.summaryPoints);
  console.log(result);
});
