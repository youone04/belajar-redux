export const actionCount = (tanda) => async(dispatch) => {
    try{

        if(tanda === 'tambah'){
            dispatch({
                type: 'COUNT_SUCCESS',
                payload : 1
            })
        }else{
            dispatch({
                type: 'COUNT_SUCCESS',
                payload : -1
            })
        }        

    }catch(e){
        dispatch({
            type : 'COUN_FAIL',
            payload : e.message
        })
    }


}