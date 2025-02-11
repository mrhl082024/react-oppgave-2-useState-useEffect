import { useEffect, useState } from "react";

export default function CatFacts(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true)
            setError(null)


        }
        fetchData()

    },[])
    
}