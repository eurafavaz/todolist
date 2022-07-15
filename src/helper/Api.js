const TaskContext = {
  taskEndpoint: () => `${urlBase}/tasks`,
  tasksList: () => TaskContext.taskEndpoint(),
  taskById: (id) => `${TaskContext.taskEndpoint()}/${id}`,
};

export const Api = {
  urlBase: "http://localhost:8000",
  ...TaskContext,
};
