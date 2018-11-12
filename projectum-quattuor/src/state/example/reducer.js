
const initialState = {
  test: false,
  testString: 'startValue',
};

const exampleReducer = (
  state = initialState,
  action,
) => {
  const { payload } = action;
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        ...state,
        test: !state.test,
      };

    case 'EXAMPLE_ACTION_WITH_PAYLOAD':
      return {
        ...state,
        testString: payload,
      };

    default:
      return state;
  }
};

export default exampleReducer;
