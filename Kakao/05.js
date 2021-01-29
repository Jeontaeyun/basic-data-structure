function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return "00:00:00";
  const { advTime, playTime } = parseVideoTime(play_time, adv_time);
  const logTable = parseLogsData(logs);
  const answer = getOptimizationTime(playTime, advTime, logTable);
  return answer;
}

function getOptimizationTime(playTime, advTime, logTable) {
  console.log(logTable);
  const startTimeTable = getLogsStartTime(logTable);
  const filteredStartTimeTable = filterLogsStartTime(startTimeTable, logTable);
  const result = filteredStartTimeTable.map((item) =>
    getAccumulateTime(item, playTime, advTime, logTable)
  );
  const optimizationTime = decideOptimizationTime(result);
  return convertTimeFormat(optimizationTime);
}

function decideOptimizationTime(timeTable) {
  const sortedTimeTable = timeTable.sort((a, b) => b.result - a.result);
  const result = sortedTimeTable[0].result;
  const filteredTimeTable = timeTable
    .filter((item) => item.result === result)
    .sort((a, b) => a.starTime - b.starTime);
  return filteredTimeTable[0].startTime;
}

const getAccumulateTime = (startTime, playTime, advTime, logTable) => {
  const result = calculateAccumulateTime(
    startTime,
    playTime,
    advTime,
    logTable
  );
  return {
    result,
    startTime,
  };
};

function calculateAccumulateTime(indexTime, playTime, advTime, logTable) {
  let accumulateTime = 0;
  const advEndTime = indexTime + advTime;
  for (const { startTime, endTime } of logTable) {
    if (indexTime >= startTime) {
      if (advEndTime >= endTime) {
        accumulateTime += advTime;
      } else if (advEndTime <= endTime) {
        accumulateTime += endTime - indexTime;
      }
    } else {
      if (advEndTime >= startTime) {
        if (advEndTime < endTime) {
          accumulateTime += advEndTime - startTime;
        } else {
          accumulateTime += endTime - startTime;
        }
      }
    }
  }
  return accumulateTime;
}

function parseLogsData(logs) {
  return logs
    .map((item, index) => {
      const [startTime, endTime] = item.split("-");
      return {
        id: index,
        startTime: getTimeStamp(startTime),
        endTime: getTimeStamp(endTime),
      };
    })
    .sort((a, b) => a.startTime - b.startTime);
}

function getLogsStartTime(logs) {
  return logs.map((item) => item.startTime);
}

function filterLogsStartTime(startTimeTable, logTable) {
  return getLogsStartTime(
    logTable.filter((item) => {
      return startTimeTable.some((starTime) => {
        if (item.startTime <= starTime && starTime <= item.endTime) return true;
      });
    })
  );
}

function parseVideoTime(play_time, adv_time) {
  return {
    playTime: getTimeStamp(play_time),
    advTime: getTimeStamp(adv_time),
  };
}

function convertTimeFormat(time) {
  let _time = time;
  const _hours = Math.floor(_time / (60 * 60 * 1000));
  _time = _time - _hours * 60 * 60 * 1000;
  const _minutes = Math.floor(_time / (60 * 1000));
  _time = _time - _minutes * 60 * 1000;
  const _seconds = Math.floor(_time / 1000);
  const hours = _hours < 10 ? "0" + _hours : _hours;
  const minutes = _minutes < 10 ? "0" + _minutes : _minutes;
  const seconds = _seconds < 10 ? "0" + _seconds : _seconds;
  return `${hours}:${minutes}:${seconds}`;
}

function getTimeStamp(text) {
  const [hours, minutes, seconds] = text.split(":");
  const _hours = Number(hours) * 60 * 60 * 1000;
  const _minutes = Number(minutes) * 60 * 1000;
  const _seconds = Number(seconds) * 1000;

  return _hours + _minutes + _seconds;
}

console.log(
  solution("02:03:55", "00:14:15", [
    "01:20:15-01:45:14",
    "00:40:31-01:00:00",
    "00:25:50-00:48:29",
    "01:30:59-01:53:29",
    "01:37:44-02:02:30",
  ])
);
