import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetData } from "../redux/Actions/actionGetData.js";
import { actionCount } from "../redux/Actions/actionCount.js";

const Home = () => {

    const dispatch = useDispatch();
    const getData = useSelector((state) => state.data);
    const getTambah = useSelector((state) => state.count)
    const {data , loading , error} = getData.dataReducers1
    useEffect(() => {
        dispatch(actionGetData());
    },[dispatch])

    return(
        <>
        <h1>Hallo semua ..</h1>
        <h2>{getTambah}</h2>
        <button onClick={() => dispatch(actionCount('tambah'))}>Tambah + </button>
        <button onClick={() => dispatch(actionCount('kurang'))} disabled={getTambah <= 0? true: false}>Kurang - </button>
        </>
    )
}

export default Home;