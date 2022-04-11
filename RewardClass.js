const AMOUNT_UP_FX1 = 50;
const AMOUNT_UP_FX2 = 100;
const POINTS_FX1 = 1;
const POINTS_FX2 = 2;

class Reward {
  /**
   * @example (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
   * @param {*} purchase
   * @returns number
   */
  getPointsRewardCompute = (purchase) => {
    if (purchase == null) {
      throw new Error("purchase null");
    }
    let fx2 = 0;
    let fx1 = 0;
    if (purchase >= AMOUNT_UP_FX2) {
      fx2 = purchase - AMOUNT_UP_FX2;
      fx1 = AMOUNT_UP_FX1;
    }
    if (purchase >= AMOUNT_UP_FX1 && purchase < AMOUNT_UP_FX2) {
      fx1 = purchase - AMOUNT_UP_FX1;
    }

    return POINTS_FX2 * fx2 + POINTS_FX1 * fx1;
  };
  /**
   *
   * @param {*} list
   * @returns number
   */
  summaryPoints = (list) => {
    if (!list) {
      throw new Error("list null");
    }
    let acc = 0;
    list.map((item) => {
      acc = acc + this.getPointsRewardCompute(item.amount);
    });
    return acc;
  };
}

module.exports = {
  Reward: new Reward(),
};
