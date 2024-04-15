import { __publicField } from './chunk-F3FYYIAV.js';

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/type.js
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

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/validate-7008d2c6.js
var FUNC_ERROR_TEXT = 'Expected a function';
var ifNotFunction = fn => {
  if (!isFunction(fn)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
};

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/debounce.js
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

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/throttle.js
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

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/deep-clone.js
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
          if (prop instanceof Date) {
            target[key] = new Date(prop.getTime());
          } else if (prop instanceof RegExp) {
            target[key] = new RegExp(prop.source, prop.flags);
          } else {
            target[key] = _deepClone(prop);
          }
        } else {
          target[key] = prop;
        }
      }
    }
    return target;
  })(source);
};

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/time-format.js
function timeFormat(time, format = 'yyyy-MM-dd hh:mm:ss') {
  const year = `${time.getFullYear()}`;
  let month = `${time.getMonth() + 1}`;
  if (month.length === 1) month = `0${month}`;
  let day = `${time.getDate()}`;
  if (day.length === 1) day = `0${day}`;
  let hours = `${time.getHours()}`;
  if (hours.length === 1) hours = `0${hours}`;
  let minutes = `${time.getMinutes()}`;
  if (minutes.length === 1) minutes = `0${minutes}`;
  let seconds = `${time.getSeconds()}`;
  if (seconds.length === 1) seconds = `0${seconds}`;
  return format
    .replace(/yyyy/g, year)
    .replace(/MM/g, month)
    .replace(/dd/g, day)
    .replace(/hh/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/memoize.js
function memoize(callback) {
  const cache = /* @__PURE__ */ new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = callback.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/copy-to-clipboard.js
function copyToClipboard(text) {
  const temp = document.createElement('textarea');
  temp.value = String(text);
  document.body.appendChild(temp);
  temp.select();
  if (document.execCommand) {
    document.execCommand('copy');
  }
  temp.style.display = 'none';
  document.body.removeChild(temp);
}

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/enum-model.js
var EnumModel = class {
  constructor(enums = []) {
    __publicField(this, 'enums');
    this.enums = enums;
    enums.forEach(({ value, display, alias }) => {
      this.addEnum(value, display, alias);
    });
  }
  addEnum(value, display, alias) {
    if (!this.getEnum(value)) this.enums.push({ value, display, alias });
  }
  getEnum(enumValue) {
    return this.enums.find(({ value }) => value === enumValue) || null;
  }
  displayOf(enumValue, defaultDisplay = '') {
    const enumItem = this.getEnum(enumValue);
    return (enumItem == null ? void 0 : enumItem.display) ?? defaultDisplay;
  }
  getEnumValues() {
    return this.enums.map(({ value }) => value);
  }
  getEnums() {
    return this.enums.map(item => item);
  }
};

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/cookie.js
var Cookie = class {
  constructor() {
    __publicField(this, 'TWENTY_FOUR_HOURS', 864e5);
    // 24小时
    __publicField(this, 'defaultAttributes', { path: '/' });
  }
  get(key) {
    const cookiePairs = document.cookie ? document.cookie.split('; ') : [];
    const cookieStore = {};
    cookiePairs.some(pair => {
      const [curtKey, ...curtValue] = pair.split('=');
      try {
        const decodeedValue = decodeURIComponent(curtValue.join('='));
        cookieStore[curtKey] = decodeedValue;
      } catch (e) {}
      return curtKey === key;
    });
    return key ? cookieStore[key] : null;
  }
  set(key, value, attributes = this.defaultAttributes) {
    attributes = { ...this.defaultAttributes, ...attributes };
    if (attributes.expires) {
      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * this.TWENTY_FOUR_HOURS);
        attributes.expires = attributes.expires.toUTCString();
      }
    }
    const attrStr = Object.entries(attributes).reduce((prevStr, attrPair) => {
      const [attrKey, attrValue] = attrPair;
      if (!attrValue) return prevStr;
      prevStr += `; ${attrKey}`;
      if (attrValue === true) return prevStr;
      prevStr += `=${attrValue.split('; ')[0]}`;
      return prevStr;
    }, '');
    value = encodeURIComponent(value);
    return (document.cookie = `${key}=${value}${attrStr}`);
  }
  /**
   * 删除某个 Cookie
   */
  del(key, attributes = { path: '/' }) {
    this.set(key, '', { ...attributes, expires: -1 });
  }
};
var cookie = new Cookie();

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/event-bus.js
var EventBus = class {
  constructor() {
    __publicField(this, 'list');
    this.list = {};
  }
  on(name, fn) {
    this.list[name] = this.list[name] || [];
    this.list[name].push(fn);
  }
  emit(name, data) {
    if (this.list[name]) {
      this.list[name].forEach(fn => {
        fn(data);
      });
    }
  }
  off(name) {
    if (this.list[name]) {
      delete this.list[name];
    }
  }
};
var eventBus = new EventBus();

// node_modules/.pnpm/@geektech+utils@2.3.1/node_modules/@geektech/utils/es/index.js
var TIME_IN_ONE_MINUTE = 6e4;
var TIME_IN_ONE_HOUR = 60 * TIME_IN_ONE_MINUTE;
var TIME_IN_ONE_DAY = 24 * TIME_IN_ONE_HOUR;
var beginningOfDate = date => {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
};
var endOfDate = date => {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
};
var beginningOfNextDay = date => {
  const result = new Date(date);
  result.setHours(24, 0, 0, 0);
  return result;
};
var beginningOfWeek = date => {
  const dayInweek = date.getDay() || 7;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayInweek + 1, 0, 0, 0);
};
var beginningOfMonth = date => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
};
var beginningOfYear = date => {
  return new Date(date.getFullYear(), 1, 1, 0, 0, 0);
};
export {
  EnumModel,
  EventBus,
  TIME_IN_ONE_DAY,
  TIME_IN_ONE_HOUR,
  TIME_IN_ONE_MINUTE,
  beginningOfDate,
  beginningOfMonth,
  beginningOfNextDay,
  beginningOfWeek,
  beginningOfYear,
  cookie,
  copyToClipboard,
  debounce,
  deepClone,
  endOfDate,
  eventBus,
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
  memoize,
  throttle,
  timeFormat,
};
//# sourceMappingURL=@geektech_utils.js.map
