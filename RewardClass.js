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
    let fx2 = 0;
    let fx1 = 0;
    if (purchase >= AMOUNT_UP_FX2) {
      fx2 = purchase - AMOUNT_UP_FX2;
      fx1 = AMOUNT_UP_FX1;
    }
    if (purchase >= AMOUNT_UP_FX1 && purchase < AMOUNT_UP_FX2) {
      fx1 = purchase - AMOUNT_UP_FX1;
    }
    console.log(POINTS_FX2 * fx2 + POINTS_FX1 * fx1);
    return POINTS_FX2 * fx2 + POINTS_FX1 * fx1;
  };
}

module.exports = {
  Reward: new Reward(),
};
