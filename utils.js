const groupByKey = (index, array) => {
  if (!array) {
    throw new Error("Empty array ");
  }
  return array.reduce((group, record) => {
    const keyName = record[index];
    group[keyName] = group[keyName] ?? [];
    group[keyName].push(record);
    return group;
  }, {});
};

const handelIterObject = (object, call) => {
  if (!object) {
    throw new Error("Empty Object");
  }
  if (!call) {
    throw new Error("Callback required");
  }
  let deltaObject = {};
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      const result = call(element);
      deltaObject[key] = result;
    }
  }
  return deltaObject;
};

module.exports = {
  groupByKey,
  handelIterObject,
};
