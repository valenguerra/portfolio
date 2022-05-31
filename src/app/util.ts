export const recursiveFilterObjectByKey = (obj: any, key: string) => {
  const output = structuredClone(obj);

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

/** Conditional style */
export const cs = (condition: boolean, classes: string, elseClasses: string = "") => {
  if (condition) return ` ${classes} `;
  return ` ${elseClasses} `;
};

export const parseBool = (value: any) => (value ? true : false);

export const varToString = (varObj: any) => Object.keys(varObj)[0];
