const RewardRecords = require("./database.json");
const { groupByKey, handleIterObject } = require("./utils");
const { Reward } = require("./RewardClass");

const getAllSummary = () => {
  const summary = handleIterObject(
    groupByKey("userId", RewardRecords),
    (item) => {
      return handleIterObject(groupByKey("month", item), Reward.summaryPoints);
    }
  );
  console.log("final summary", summary);
  return summary;
};

const getRewarsRecords = () => RewardRecords;
module.exports = {
  getAllSummary,
  getRewarsRecords,
};
