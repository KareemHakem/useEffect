import axios from "axios";

export const ShapeArray = (arr) => {
  for (var index in arr) {
    var name = arr[index].name;

    Object.assign(arr[index], { label: name }, { value: name });
  }
  return arr;
};

export const fetchCur = async (cur) => {
  const { data } = await axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${cur}&tsyms=USD`
  );
  return data;
};
