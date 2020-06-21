import { environment } from "./Enviroment"; 
import axios from "axios";

export async function connect(path, page = 10,id ){
	const base_path = environment.base_path;
	const _path =environment[path]
    const publicKey = 'f52d3b7e63fbd74f2845e63ee59294b4';    
	const  hash="ae03e83bbf6706ad412eac68d1180711";
	let _page = page; 
	let result=[];
	let current_path = id 
	? `${base_path}${_path}/${id}/comics?orderBy=onsaleDate&ts=1&apikey=${publicKey}&hash=${hash}`
	: `${base_path}${_path}?limit=${_page}&ts=1&apikey=${publicKey}&hash=${hash}`
	 
	await axios.get(current_path)
	.then( response =>{
		result = response.data.data;
	})
	.catch(err =>{
		console.log('err',err)
	});	 
	return result
}

 

 