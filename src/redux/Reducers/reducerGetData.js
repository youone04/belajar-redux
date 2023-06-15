
const initialState = {
    dataReducers1: {
      loading: true,
      data: [],
      error: null,
    },
  };
  
  export const reducerGetData = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATA_SUCCESS':
        return {
          ...state,
          dataReducers1: {
            data: action.payload,
            error: null,
          },
        };
      case 'GET_DATA_FAIL':
        return {
          ...state,
          dataReducers1: {
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };