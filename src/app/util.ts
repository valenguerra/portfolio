export const recursiveFilterObjectByKey = (obj: any, key: string) => {
  const output = Object.assign(obj, {});

  for (let k in obj) {
    if (typeof obj[k] === "string") continue;
    if (obj[k][key]) {
      output[k] = obj[k][key];
      continue;
    }
    output[k] = recursiveFilterObjectByKey(obj[k], key);
  }

  return output;
};
