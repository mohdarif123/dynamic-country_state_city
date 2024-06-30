export class StringConstants {
  LOGIN = "login";
  SIGN_UP = "signup";
  FORGOT_PASSWORD = "forgot-password";
  passwordValidationRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$!%*?&])(?=.*[0-9])[A-Za-z\d#@$!%*?&]{8,}/;

  emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}
let strings = new StringConstants();
export default strings;
