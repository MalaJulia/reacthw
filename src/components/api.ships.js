import {useEffect, useState} from "react";
import axios from "axios";
import ships from "./Luunching";

let axiosInstance = axios.create({
baseURL: 'https://api.spacexdata.com/v3/launches/'
})

const getShipAxios= () => {
    return axiosInstance.get()
}

export {getShipAxios}


// export default Ships