const initialState = {
  bal: 5000,
};

//arg1 = output arg2=input of the reducer
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state, //maintain the state
        bal: state.bal + action.value,
      };
      break;
    case "WITHDRAW":
      return {
        ...state,
        bal: state.bal - action.value,
      };
      break;
  }
  return state;
};

export default reducer;
