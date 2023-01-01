import instance from "./../../constants/axiosConfig";

export const ImagesApi = async (body) => {
  try {
    const response = await instance.post(`/api/Files`, body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UserRegister = async (body) => {
  try {
    const response = await instance.post(`/api/Customer/Register`, body);
    return response;
  } catch (error) {
    return error.response;
  }
};
