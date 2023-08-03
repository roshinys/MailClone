import axios from "axios";

const useHttp = (requestConfig) => {
  const sendRequest = async () => {
    try {
      return await axios({
        method: requestConfig.method
          ? requestConfig.method.toUpperCase()
          : "GET",
        url: requestConfig.url,
        data: requestConfig.body ? requestConfig.body : null,
        headers: { ...requestConfig.headers },
      });
    } catch (exception) {
      return {
        error: true,
        exception,
      };
    }
  };
  return sendRequest;
};

export default useHttp;
