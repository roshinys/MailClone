import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const createMail = async (data) => {
  try {
    return await apiClient.post("/mail", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getInboxMail = async () => {
  try {
    return await apiClient.get("/mail/inbox");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getSentMail = async () => {
  try {
    return await apiClient.get("/mail/sent");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateIsRead = async (id) => {
  try {
    return await apiClient.put(`/mail/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getMailById = async (mailId) => {
  try {
    return await apiClient.get(`/mail/${mailId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const deleteMailById = async (mailId) => {
  try {
    return await apiClient.delete(`/mail/${mailId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
