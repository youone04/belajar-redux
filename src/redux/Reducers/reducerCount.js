const initialState = 1;

export const reducerCount = (state = initialState, action) => {
    switch(action.type){
        case 'COUNT_SUCCESS':
             return state + action.payload
        case 'COUNT_GAGAL':
            return action.payload
        default: return state;
    }
}