import axios from "axios";

export const getTodo = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return data;
};
