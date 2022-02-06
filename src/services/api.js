import axios from "axios";
import crypto from "crypto-js";
import { useState } from "react";


export const ObtenerComics= ()=>{
    //const [comicData, setComicData]=useState("");

    const timestamp = Date.now();
    const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
    const options={
        method: 'GET',
        url: 'http://gateway.marvel.com/v1/public/comics',
        params: {
          ts: timestamp,
          apikey: process.env.REACT_APP_PUBLIC_KEY,
          hash: hashs
        }
    };
    return options;
};