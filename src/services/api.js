
import crypto from "crypto-js";
//import { functions } from 'firebase-functions'
//const functions = require('firebase-functions');
//import * as functions from 'firebase-functions';
//import {functions} from 'firebase/functions';
// import  functions from 'firebase-functions'
// console.log("adasdad")
//     console.log(functions.config().comics.nopublic)
export const ObtenerComics= ()=>{
    const timestamp = Date.now();
    const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
    const options={
        method: 'GET',
        url: 'https://gateway.marvel.com/v1/public/comics',
        params: {
          
          dateDescriptor:'thisMonth',
          orderBy:'onsaleDate',
          limit:'40',
          ts: timestamp,
          apikey: process.env.REACT_APP_PUBLIC_KEY,
          hash: hashs
        }
    };
    return options;
};

export const SearchComicId=(comicId)=>{
  const timestamp = Date.now();
    const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
    const options={
        method: 'GET',
        url: `https://gateway.marvel.com/v1/public/comics/${comicId}`,
        params: {
          ts: timestamp,
          apikey: process.env.REACT_APP_PUBLIC_KEY,
          hash: hashs
        }
    };
    return options;
}
export const buscarComicName= (name_comic)=>{
  const timestamp = Date.now();
  const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
  const options={
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/comics',
      params: {
        titleStartsWith:name_comic,
        orderBy:'-onsaleDate',
        limit:'100',
        ts: timestamp,
        apikey: process.env.REACT_APP_PUBLIC_KEY,
        hash: hashs
      }
  };
  return options;
};

export const buscarCharacter= (name_character)=>{
  const timestamp = Date.now();
  const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
  const options={
      method: 'GET',
      url: 'https://gateway.marvel.com/v1/public/characters',
      params: {
        nameStartsWith:name_character,
        orderBy:'modified',
        limit:'100',
        ts: timestamp,
        apikey: process.env.REACT_APP_PUBLIC_KEY,
        hash: hashs
      }
  };
  return options;
};
export const buscarCharacterComics= (id)=>{
  const timestamp = Date.now();
  const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
  const options={
      method: 'GET',
      url: `https://gateway.marvel.com/v1/public/characters/${id}/comics`,
      params: {
        orderBy:'-onsaleDate',
        limit:'100',
        ts: timestamp,
        apikey: process.env.REACT_APP_PUBLIC_KEY,
        hash: hashs
      }
  };
  return options;
};

export const buscarComicsCharacterlist= (id)=>{
  const timestamp = Date.now();
  const hashs = crypto.MD5(timestamp+process.env.REACT_APP_PRIVATE_KEY+process.env.REACT_APP_PUBLIC_KEY).toString()
  const options={
      method: 'GET',
      url: `https://gateway.marvel.com/v1/public/comics/${id}/characters`,
      params: {
        orderBy:'name',
        limit:'100',
        ts: timestamp,
        apikey: process.env.REACT_APP_PUBLIC_KEY,
        hash: hashs
      }
  };
  return options;
};
//format=comic&formatType=comic&noVariants=false&dateDescriptor=thisMonth&hasDigitalIssue=true&orderBy=onsaleDate&limit=10&apikey=