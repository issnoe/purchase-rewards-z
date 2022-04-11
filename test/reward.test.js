const { Reward } = require("../RewardClass");

test("pointsRewardCompute", () => {
  expect(Reward.getPointsRewardCompute(200)).toBe(250);
  expect(Reward.getPointsRewardCompute(190)).toBe(230);
  expect(Reward.getPointsRewardCompute(150)).toBe(150);
  expect(Reward.getPointsRewardCompute(120)).toBe(90);
  expect(Reward.getPointsRewardCompute(101)).toBe(52);
  expect(Reward.getPointsRewardCompute(70)).toBe(20);
  expect(Reward.getPointsRewardCompute(51)).toBe(1);
});
