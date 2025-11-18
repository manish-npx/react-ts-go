import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { Button } from "../components/ui/button"
import { Skeleton } from "../components/ui/skeleton"

type BlogsType = {
    id: number
    title: string
    body: string
}

const BlogDetails = () => {
    const [blog, setBlog] = useState<BlogsType | null>(null)
    const [loading, setLoading] = useState(true)
    const { blogid } = useParams()

    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts/${blogid}`)
                const results = await res.json()
                setBlog(results)
                setLoading(false)
            } catch (error) {
                console.error("error", error)
            }
        }

        fetchAPi()
    }, [blogid])

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto p-6 space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        )
    }

    if (!blog) return <div>No Blog Found</div>

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">

            {/* Back Button */}
            <Link to="/blogs">
                <Button variant="outline">⬅ Back to Blogs</Button>
            </Link>

            {/* Title */}
            <h1 className="text-3xl font-bold">{blog.title}</h1>

            {/* Image */}
            <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg border shadow-sm"
            />

            {/* Description */}
            <p className="text-lg leading-relaxed text-muted-foreground">
                {blog.body}
            </p>
        </div>
    )
}

export default BlogDetails
