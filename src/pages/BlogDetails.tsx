import { useEffect, useState } from "react"
import { useParams } from "react-router"

type BlogsType = {
    id: number
    title: string
    body: string
}


const BlogDetails = () => {
    const [blog, setBlog] = useState<BlogsType[]>([])


    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/post/${blogid}`)
                const results = await res.json()
                setBlog(results)
            } catch (error) {
                console.error(`error`, error)
            }
        }

        fetchAPi()
    }, [])

    const { blogid } = useParams()
    console.log("blogid", blogid)
    console.log("blog", blog)
    return (
        <div>BlogDetails</div>
    )
}

export default BlogDetails