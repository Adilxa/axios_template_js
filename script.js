// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

// axios.interceptors.request.use(config => {
//     // Добавление токена аутентификации к каждому запросу
//     config.headers.Authorization = 'Bearer YOUR_TOKEN';
//     return config;
//   }, error => {
//     return Promise.reject(error);
//   });

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error("Error posting data:", error);
//   });

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts", {
//     cancelToken: source.token,
//   })
//   .catch(thrown => {
//     if (axios.isCancel(thrown)) {
//       console.log("Request canceled", thrown.message);
//     } else {
//       console.error("Error:", thrown);
//     }
//   });

// // Отмена запроса
// source.cancel("Operation canceled by the user.");

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

axiosInstance
  .get("/posts")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

axiosInstance
  .post("/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error posting data:", error);
  });

axiosInstance
  .put("/posts/1", {
    title: "bar",
    body: "foo",
    userId: 1,
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error updating data:", error);
  });

axiosInstance
  .delete("/posts/1")
  .then(response => {
    console.log("Deleted:", response.data);
  })
  .catch(error => {
    console.error("Error deleting data:", error);
  });
