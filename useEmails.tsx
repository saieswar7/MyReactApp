import React,{useState,useEffect} from "react";
import axios from 'axios';


interface Email{
    
      id: number,
      photo:string,
      from_adress:string,
      title: string,
      body:string
}

const useEmails =()=>{
    const [isloading, setLoading]=useState(false);
    const [emails, setEmails]=useState<Email[]>([]);
    const [error, seteError]=useState(null);

    function getProfileImages(){

        setLoading(true);
        axios.get('https://my-json-server.typicode.com/saieswar7/myjsondata/Emails').then(Response=>{
            setLoading(false)
            setEmails(Response.data)
        console.log(Response.data)
        }).catch(e =>{
            seteError(e)
            setLoading(false)
        })
    }

    useEffect(function(){
        getProfileImages();
    },[])

    return {isloading,emails,error}
}


export default useEmails;