import { getCookie } from "./Cookies";

const SpamCheck = () => {
  const cookieSet = getCookie("eligibilityCode");
  if (cookieSet) {
    //cookie is available, thus cannot send message
    return false;
  } else {
    //cookie is unavailable, thus can send form message
    return true;
  }
};

export default SpamCheck;
