// node_modules/.pnpm/@geektech+utils@1.0.1/node_modules/@geektech/utils/dist/index.es.js
var getType = obj => Object.prototype.toString.call(obj).slice(8, -1);
function isArray(obj) {
  return getType(obj) === 'Array';
}
function isObject(obj) {
  return getType(obj) === 'Object';
}
function isString(obj) {
  return getType(obj) === 'String';
}
function isNumber(obj) {
  return getType(obj) === 'Number' && obj === obj;
}
function isRegExp(obj) {
  return getType(obj) === 'RegExp';
}
function isFile(obj) {
  return getType(obj) === 'File';
}
function isBlob(obj) {
  return getType(obj) === 'Blob';
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction(obj) {
  return typeof obj === 'function';
}
function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
var FUNC_ERROR_TEXT = 'Expected a function';
var ifNotFunction = fn => {
  if (!isFunction(fn)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
};
function debounce(callback, delay = 60) {
  ifNotFunction(callback);
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  };
}
function throttle(callback, delay = 60) {
  ifNotFunction(callback);
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      const res = callback.call(this, ...args);
      setTimeout(() => {
        flag = true;
      }, delay);
      return res;
    }
    return void 0;
  };
}
var find = (uniqueList, source) => {
  for (var i = 0; i < uniqueList.length; i++) {
    if (uniqueList[i].source === source) {
      return uniqueList[i];
    }
  }
  return null;
};
var deepClone = source => {
  const uniqueList = [];
  return (function _deepClone(source2) {
    let target = Array.isArray(source2) ? [] : {};
    if (source2 && typeof source2 === 'object') {
      const uniqueData = find(uniqueList, source2);
      if (uniqueData) return uniqueData.target;
      uniqueList.push({
        source: source2,
        target,
      });
      for (let key in source2) {
        let prop = source2[key];
        if (prop && typeof prop === 'object') {
          target[key] = _deepClone(prop);
        } else {
          target[key] = prop;
        }
      }
    }
    return target;
  })(source);
};
export {
  debounce,
  deepClone,
  isArray,
  isBlob,
  isEmptyObject,
  isFile,
  isFunction,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
  throttle,
};
//# sourceMappingURL=@geektech_utils.js.map
