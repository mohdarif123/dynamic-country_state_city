const customInputStyles = {
  nameField: {
    fontWeight: 400,
    color: "#000000",
    marginLeft: "1px",
    display: "flex",
  },
  inputBoxStyle: {
    caretColor: "black",
    borderRadius: "6px",
    curetColor: "white",
    border:"1px solid gray",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "6px",
      color: "red",
      fontColor: "#BEBEBE",
      fontSize: "14px",
      lineHeight: "1.5715",
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
    "& .MuiInputBase-input": {
      position: "relative",
      padding: "6px 10px",
      color: "#7A7A7A",
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: "Source Sans 3",
      "&::placeholder": {
        fontFamily: "Source Sans 3",
        color: "#7A7A7A",
        fontSize: "16px",
        lineHeight: "28px",
      },
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: ` 0 0 0 1000px #fff inset`,
        transition: "background-color 5000s ease-in-out 0s !important",
        backgroundColor: "#fff ! important",
        "-webkit-text-fill-color": "#7A7A7A !important",
      },
    },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#ffffff",
    },
    // for placeholder style at disbled button
    "& .Mui-disabled": {
      "& .MuiInputBase-input.MuiOutlinedInput-input": {
        "-webkit-text-fill-color": "#C1C1C1",
      },
    },
    ".MuiOutlinedInput-notchedOutline": { border: "none" },
  },
  // mmmm

  textField: {
    caretColor: "white",
    borderRadius: "38px",
    curetColor: "black",
    background: "red",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "38px",
      color: "#BEBEBE",
      fontColor: "#BEBEBE",
      fontSize: "14px",
      lineHeight: "1.5715",
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
    "& .MuiInputBase-input": {
      position: "relative",
      padding: "12px 12px",
      color: "white",
      "&::placeholder": {
        color: "#F5FAFF",
        fontSize: "15px",
        lineHeight: "28px",
      },
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: ` 0 0 0 1000px red inset`,
        transition: "background-color 5000s ease-in-out 0s !important",
        backgroundColor: `red ! important`,
        "-webkit-text-fill-color": "#fff !important",
      },
    },
    ".MuiOutlinedInput-notchedOutline": { border: "none" },
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
      color: "#ffffff",
    },
    // for placeholder style at disbled button
    "& .Mui-disabled": {
      "& .MuiInputBase-input.MuiOutlinedInput-input": {
        "-webkit-text-fill-color": "#808080",
      },
    },
  },
  errorStyle: {
    fontSize: "0.75rem",
    color: "#d32f2f",
  },

  nameField1: {
    fontWeight: 500,
    color: "#000000",
    marginLeft: "4px",
    display: "flex",
    "& .MuiFormLabel-asterisk": {
      color: "red",
      fontSize: "11px",
    },
  },
} as const;

export default customInputStyles;
