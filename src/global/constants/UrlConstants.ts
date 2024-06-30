import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  //VIEW PATHs
  LANDING_VIEW_PATH = "/";
  SIGN_UP_VIEW_PATH = "/signup";
  LOGIN_VIEW_PATH = "/login";
  FORGOT_PASSWORD_VIEW_PATH = "/forgot-password";
  PRODUCT_VIEW_PATH = "/product";
}

let urls = new UrlConstants();
export default urls;
