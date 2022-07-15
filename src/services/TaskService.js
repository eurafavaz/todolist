import { Api } from "../helper/Api";

const parseResponse = (response) => response.json();

export const TaskService = {
  getList: () => fetch(Api.tasksList(), { method: "GET" }).then(parseResponse),
  getById: (id) => fetch(Api.taskById(), { method: "GET" }).then(parseResponse),
  create: () => fetch(Api.createTask)
};
