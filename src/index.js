const isObjProps = (obj, propsArray) => {
  if (!obj) {
    return null;
  }
  let objCopy = Object.assign({}, obj);

  for (let i = 0; i < propsArray.length; i++) {
    if (
      typeof objCopy[propsArray[i]] !== "undefined" &&
      objCopy[propsArray[i]] !== null
    ) {
      objCopy = objCopy[propsArray[i]];
    } else {
      return null;
    }
  }
  return objCopy;
};

export default isObjProps;
