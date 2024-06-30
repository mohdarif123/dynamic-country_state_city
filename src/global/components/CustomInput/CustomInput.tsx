import { Box, InputLabel, SxProps, TextField, Typography } from "@mui/material";
import customInputStyles from "./CustomInput.styles";

type Props = {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: any;
  type?: string;
  name?: string;
  select?: boolean;
  onKeyPress?: any;
  InputProps?: any;
  error?: any;
  required?: boolean;
  InputLabelProps?: any;
  id?: string;
  sx?: SxProps;
  disabled?: boolean;
  propsToInputElement?: any;
  helperText?: string;
  customInputClasses?: any;
  customClasses?: any;
  onInput?: any;
  dateIconColor?: any;
  autoComplete?: string;
};

const CustomInput: React.FC<Props> = ({
  InputLabelProps,
  InputProps,
  customClasses,
  customInputClasses,
  dateIconColor,
  disabled,
  error,
  helperText,
  id,
  label,
  name,
  onChange,
  onInput,
  onKeyPress,
  placeHolder,
  propsToInputElement,
  required,
  select,
  sx,
  type,
  value,
  autoComplete,
}) => {
  const classes = customInputStyles;

  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={
          customClasses ? [classes.nameField, customClasses] : classes.nameField
        }
      >
        {label}{" "}
        {required && (
          <Typography component={"span"} sx={{ color: "red" }}>
            *
          </Typography>
        )}{" "}
      </Typography>

      <TextField
        sx={
          customInputClasses
            ? [classes.inputBoxStyle, customInputClasses]
            : classes.inputBoxStyle
        }
        variant="outlined"
        id={id}
        className={dateIconColor ? dateIconColor : ""}
        placeholder={placeHolder}
        type={type}
        name={name}
        select={select}
        value={value}
        autoComplete={autoComplete ? autoComplete : ""}
        InputProps={InputProps}
        inputProps={propsToInputElement}
        onChange={onChange}
        onKeyPress={onKeyPress}
        required={required}
        {...(error && { error: true, helperText: error })}
        disabled={disabled}
        helperText={helperText}
        onInput={onInput}
      />
      {/* {error && <span style={classes.errorStyle}>{error}</span>} */}
    </Box>
  );
};

export default CustomInput;
