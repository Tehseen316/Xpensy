import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";
//! Get the token
//! Login
export const loginAPI = async ({ email, password }) => {
const token = getUserFromStorage();

  const response = await axios.post(`${BASE_URL}/users/login`, {
    email,
    password,
  });
  //Return a promise
  return response.data;
};
//! register
export const registerAPI = async ({ email, password, username }) => {
const token = getUserFromStorage();

  const response = await axios.post(`${BASE_URL}/users/register`, {
    email,
    password,
    username,
  });
  //Return a promise
  return response.data;
};
//! change password
export const changePasswordAPI = async (newPassword) => {
const token = getUserFromStorage();

  const response = await axios.put(
    `${BASE_URL}/users/change-password`,
    {
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};

//! update Profile
export const updateProfileAPI = async ({ email, username }) => {
const token = getUserFromStorage();

  const response = await axios.put(
    `${BASE_URL}/users/update-profile`,
    {
      email,
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
