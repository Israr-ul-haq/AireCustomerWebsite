import axios from "../../constants/axiosConfig";

export const notifications = async (body) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/CustomerAccount/GetNotifications?PageNumber=${body.pageNumber}&PageSize=${body.pageSize}&Id=${body.id}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
