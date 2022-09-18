import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

const inputChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };
  
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};



export default useInput;
