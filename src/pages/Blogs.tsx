import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "../components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemHeader,
    ItemMedia,
    ItemTitle
} from "../components/ui/item"

type BlogsType = {
    id: number
    title: string
    body: string
}

const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogsType[]>([])


    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts`)
                const results = await res.json()
                setBlogs(results.posts)
            } catch (error) {
                console.error(`error`, error)
            }
        }

        fetchAPi()
    }, [])

    return (
        <div className="flex min-h-auto flex-col items-center justify-center py-6">
            <h1>Blogs List </h1>
            <div className="w-full max-w-2xl">
                <ItemGroup className="flex flex-col gap-4">
                    {blogs.map((blog) => (
                        <Item
                            key={blog.id}
                            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                        >
                            {/* Image + Title row */}
                            <div className="flex items-start gap-4">
                                <ItemMedia>
                                    <ItemHeader>
                                        {/* SMALL IMAGE  */}
                                        <img
                                            src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                                            alt={blog.title}
                                            className="w-20 h-20 rounded-md object-cover border"
                                        />
                                    </ItemHeader>
                                </ItemMedia>

                                {/* Text content */}
                                <ItemContent>
                                    <ItemTitle className="text-lg font-semibold">
                                        {blog.title}
                                    </ItemTitle>

                                    <ItemDescription className="line-clamp-3 text-sm text-muted-foreground">
                                        {blog.body}
                                    </ItemDescription>
                                </ItemContent>
                            </div>

                            {/* Actions */}
                            <ItemActions className="mt-4"  >
                                <Link to={`/blog/${blog.id}`}>
                                    <Button size="sm" className="w-full">
                                        View Blog
                                    </Button>
                                </Link>
                            </ItemActions>
                        </Item>
                    ))}
                </ItemGroup>
            </div>
        </div>
    )
}

export default Blogs
