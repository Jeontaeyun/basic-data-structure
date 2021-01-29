function solution(new_id) {
  const answer = lastProcess(
    removeExceedString(
      convertAToNullString(
        trimSidePoint(
          mergeDuplicatedPoint(deleteUnAllowedText(convertLowerCase(new_id)))
        )
      )
    )
  );
  return answer;
}

function convertLowerCase(id) {
  return String(id).toLowerCase();
}

function deleteUnAllowedText(id) {
  const regex = /[^a-z0-9-_.]/g;
  return id.replace(regex, "");
}

function mergeDuplicatedPoint(id) {
  const idArray = id.split("");
  const mergeDuplicatedPointArray = idArray.reduce(
    (accumulator, item, index) => {
      if (index > 0 && item === "." && idArray[index - 1] === ".")
        return accumulator;
      else return [...accumulator, item];
    },
    []
  );
  const new_id = mergeDuplicatedPointArray.join("");
  return new_id;
}

function trimSidePoint(id) {
  const hasLastPoint = id[id.length - 1] === ".";
  const hasFirstPoint = id[0] === ".";
  if (!hasFirstPoint && !hasLastPoint) return id;
  let new_id = id;
  if (hasFirstPoint) new_id = new_id.slice(1, new_id.length);
  if (hasLastPoint) new_id = new_id.slice(0, new_id.length - 1);
  return new_id;
}

function convertAToNullString(id) {
  if (id) return id;
  return "a";
}

function removeExceedString(id) {
  if (id.length < 16) return id;
  return trimSidePoint(id.slice(0, 15));
}

function lastProcess(id) {
  if (id.length > 2) return id;
  let new_id = id;
  const lastChar = id[new_id.length - 1];
  while (new_id.length < 3) {
    new_id = new_id + lastChar;
  }
  return new_id;
}
