const { getAllSummary } = require("../summary");

test("getAllSummary -> Get Rewards Per Month", async () => {
  expect(getAllSummary()).toEqual({
    1: {
      january: 4410,
      march: 3390,
      april: 2230,
      may: 50,
      october: 930,
      november: 3560,
      february: 2660,
      august: 1360,
      september: 1500,
      december: 2090,
      june: 1850,
      july: 2200,
    },
    2: {
      february: 3260,
      june: 1690,
      september: 790,
      december: 1610,
      april: 2020,
      july: 750,
      october: 760,
      august: 1370,
      january: 1540,
      november: 1230,
      march: 920,
    },
    3: {
      july: 850,
      august: 630,
      may: 30,
      june: 970,
      march: 1130,
      april: 920,
      january: 1310,
      february: 1800,
      september: 630,
      october: 790,
      november: 750,
      december: 820,
    },
  });
});
