import cookie from "js-cookie";

//set cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      //Day
      expires: 1,
    });
  }
};

//get cookie
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};
