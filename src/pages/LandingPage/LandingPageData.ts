import strings from "../../global/constants/StringConstants";

export const allTabs = [
  { label: "Login", value: "login" },
  { label: "Sign Up", value: "signup" },
];
export const registerUserType = ["Individual", "Enterprise", "Governments"];

// register form input state
export const registerForm = () => {
  return {
    registerType: {
      value: "Individual",
      error: "",
    },
    firstName: {
      value: "",
      error: "",
    },
    lastName: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    address: {
      value: "",
      error: "",
    },
    country: {
      value: "",
      error: "",
    },
    state: {
      value: "",
      error: "",
    },
    city: {
      value: "",
      error: "",
    },
    pinCode: {
      value: "",
      error: "",
    },
    mobileNumber: {
      value: "",
      error: "",
    },
    fax: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    confirmPassword: {
      value: "",
      error: "",
    },
  };
};

// login form input state
export const loginFormInputData = () => {
  return {
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  };
};

// validation ------->
// register validation method
export const registerFormDataValidation = (registerUserValue: any) => {
  let errors = registerUserValue;
  const checkEmail = strings.emailRegex;
  const firstName = registerUserValue.firstName.value.trim();
  const email = registerUserValue.email.value.trim();
  const address = registerUserValue.address.value.trim();
  const country = registerUserValue.country.value.trim();
  const state = registerUserValue.state.value.trim();
  const city = registerUserValue.city.value.trim();
  const pinCode = registerUserValue.pinCode.value.trim();
  const mobileNumber = registerUserValue.mobileNumber.value.trim();
  const password = registerUserValue.password.value.trim();
  const confirmPassword = registerUserValue.confirmPassword.value.trim();
  let isValid = true;

  if (
    !firstName &&
    !email &&
    !address &&
    !country &&
    !state &&
    !city &&
    !pinCode &&
    !mobileNumber &&
    !password &&
    !confirmPassword
  ) {
    errors.firstName.error = "Please enter first Name!";
    errors.email.error = "Please enter email!";
    errors.address.error = "Please enter address!";
    errors.country.error = "Please select country!";
    errors.state.error = "Please select state!";
    errors.city.error = "Please select city!";
    errors.pinCode.error = "Please enter pincode!";
    errors.mobileNumber.error = "Please enter mobile number!";
    errors.password.error = "Please enter password!";
    errors.confirmPassword.error = "Please enter confirm password!";

    isValid = false;
  }
  if (!firstName) {
    errors.firstName.error = "Please enter first Name!";
    isValid = false;
  }
  if (!email) {
    errors.email.error = "Please enter email!";
    isValid = false;
  }
  if (email) {
    if (!checkEmail.test(email)) {
      errors.email.error = "Please enter valid E-mail";
      isValid = false;
    }
  }
  if (!address) {
    errors.address.error = "Please enter address!";
    isValid = false;
  }
  if (!country) {
    errors.country.error = "Please select country!";
    isValid = false;
  }
  if (!state) {
    errors.state.error = "Please select state!";
    isValid = false;
  }
  if (!city) {
    errors.city.error = "Please select city!";
    isValid = false;
  }
  if (!pinCode) {
    errors.pinCode.error = "Please enter pincode!";
    isValid = false;
  }
  if (!mobileNumber) {
    errors.mobileNumber.error = "Please enter mobile number!";
    isValid = false;
  }
  if (!password) {
    errors.password.error = "Please enter password!";
    isValid = false;
  }
  if (password && !strings.passwordValidationRegex.test(password)) {
    errors.password.error =
      "Must contain at least one number and one uppercase and lowercase letter and at least 8 or more character!";
    isValid = false;
  }
  if (!confirmPassword) {
    errors.confirmPassword.error = "Please enter confirm password!";
    isValid = false;
  }
  if (password !== confirmPassword && confirmPassword?.length > 0) {
    errors.confirmPassword.error =
      "Confirm password should be same as password!";
    isValid = false;
  }

  return { isValid, errors };
};

export const loginFormDataValidation = (loginUserValue: any) => {
  let errors = loginUserValue;
  const checkEmail = strings?.emailRegex;
  const email = loginUserValue?.email?.value?.trim();
  const password = loginUserValue?.password?.value?.trim();
  const dataFromLocalStorage = localStorage?.getItem("registerDetails");
  let parsedData = [];
  if (dataFromLocalStorage) {
    parsedData = JSON.parse(dataFromLocalStorage);
  }
  const result = parsedData.some((item: any) => {
    return item?.email === email && item?.password === password;
  });
  let isValid = true;

  if (!email && !password) {
    errors.email.error = "Please enter email!";
    errors.password.error = "Please enter password!";
    isValid = false;
  }
  if (result === false) {
    alert("Please enter correct login email and password");
    isValid = false;
  }
  if (!email) {
    errors.email.error = "Please enter email!";
    isValid = false;
  }
  if (email) {
    if (!checkEmail?.test(email)) {
      errors.email.error = "Please enter valid E-mail";
      isValid = false;
    }
  }

  if (!password) {
    errors.password.error = "Please enter valid password!";
    isValid = false;
  }

  return { isValid, errors };
};
