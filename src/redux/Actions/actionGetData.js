import axios from "axios";

export const actionGetData = () => async (dispatch) => {
    try {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_DATA_FAIL',
        payload: error.message
      });
    }
  };