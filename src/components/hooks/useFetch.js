import { useState, useEffect } from 'react'


const useFetch = ({ url }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const res = await fetch(url)
        const resJson = await res.json()

        const resItems = []
        for (const id in resJson){
            const resItem = {
                id: id, 
                ...resJson[id]
            }
            resItems.push(resItem)
        }
        setData(resItems)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { isLoading, data}
}

export default useFetch