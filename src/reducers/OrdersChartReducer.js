const ordersChartReducer = (state = {
  visible: true
}, action) => {
  switch(action.type) {
    case "SHOW_CHARTS":
      state = {
        ...state,
        visible: action.payload
      }
      break;
  }

  return state;
};

export default ordersChartReducer;