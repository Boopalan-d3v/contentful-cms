import {createClient} from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
    space:'2vb0nrrc22ei',
    environment:'master',
    accessToken:'6g7u7g9bRv5rsealYaoRpYbx4W5xew92Si_AJJ5gsrg'
})

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async() => {
        try {
            const response =await client.getEntries({content_type:'projects'})
            const project = response.items.map((item) =>{
                const {title, url, image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {title, url, id, img}
            })
            setProjects(project)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }
    
    useEffect(()=>{
        getData()
    },[])

    return {isLoading, projects}
}
