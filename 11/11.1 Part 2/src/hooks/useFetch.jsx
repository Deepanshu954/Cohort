import { useState, useEffect } from "react";

export function usePost()
{
    const [post, setPost] = useState({});

    async function getPost()
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const json = await response.json();
        setPost(json);
    }

    useEffect(()=>{
        getPost();
    },[]);

    return post;
}

export function useFetch(url)
{
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails()
    {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getDetails();
    },[url])


    return{
        finalData,
        loading
    }
}