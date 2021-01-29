/**
 * 01. 부분 집합을 모두 구한다.
 * 02. 각 부분 집합 별로 호출 횟수를 종합한다.
 * 03. Max인 값을 추출한다.
 * 04. Max인 값을 가지는 요소를 추출한다.
 */

function solution(orders, course) {
  const answer = getCourseOrders(orders, course);
  return sortASC(answer);
}

const getCourseOrders = (orders, course) => {
  const record = getCourseOrderRecord(orders);
  const filteredRecord = filterLimitRecord(record, course);
  return getMaxItemWithCourse(filteredRecord, course);
};

const getMaxItemWithCourse = (record, course) => {
  return course.reduce((accumulator, item) => {
    const maxItem = getMaxItem(record, item);
    if (maxItem) return [...accumulator, ...maxItem];
    else return [...accumulator];
  }, []);
};

const getMaxItem = (record, length) => {
  const _record = filterLimitWithLength(record, length);
  const countTable = calculateCount(_record);
  const maxCount = getMaxCount(countTable);
  const item = getMaxCourseOrder(countTable, maxCount);
  return item;
};

const calculateCount = (record) => {
  return record.reduce((accumulator, item) => {
    if (accumulator[item] === undefined) accumulator[item] = 0;
    else {
      accumulator[item] = accumulator[item] + 1;
    }
    return { ...accumulator };
  }, {});
};

const getMaxCount = (countTable) => {
  const values = Object.values(countTable);
  return Math.max(...values) || 0;
};

const getMaxCourseOrder = (countTable, maxCount) => {
  return Object.entries(countTable)
    .map((item) => {
      if (maxCount >= 1 && item[1] === maxCount) return item[0];
      else return null;
    })
    .filter((item) => item !== null);
};

const getCourseOrderRecord = (orders) => {
  return orders.reduce((accumulator, item) => {
    const orderBaseArray = convertOrderToArray(item);
    const courseOrder = [...makePowerSet(orderBaseArray)];
    return [...accumulator, ...courseOrder];
  }, []);
};

const filterLimitRecord = (record, course) => {
  return record.filter((item) => course.includes(item.length));
};

const filterLimitWithLength = (record, length) => {
  return record.filter((item) => item.length === length);
};

const sortASC = (array) => {
  return array.sort();
};

function convertOrderToArray(order) {
  return order.split("").sort();
}

function makePowerSet(array) {
  const powerSet = array.map((item, index) => {
    if (index !== array.length) {
      const recursivePowerSet = makePowerSet(
        array.slice(index + 1, array.length)
      );
      const recursive = recursivePowerSet.map((_item) => {
        return [item, _item].join("");
      });
      return [item, ...recursive];
    } else return [item];
  });
  return powerSet.reduce((accumulator, item) => [...accumulator, ...item], []);
}

function removeExceedItem(array) {
  return array.filter((item) => item.length > 1 && item.length < 20);
}
