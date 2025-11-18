import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Button } from "../components/ui/button"
import { Skeleton } from "../components/ui/skeleton"

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

const BlogSkeleton = () => {
    return (
        <Item className="border rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-4">
                {/* Image skeleton */}
                <Skeleton className="w-20 h-20 rounded-md" />

                {/* Text skeleton */}
                <div className="flex flex-col gap-2 w-full">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                </div>
            </div>

            {/* Button skeleton */}
            <div className="mt-4">
                <Skeleton className="h-8 w-full rounded-md" />
            </div>
        </Item>
    )
}



const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogsType[]>([])
    const [isPending, setIsPending] = useState<boolean>(true)


    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts`)
                const results = await res.json()
                setBlogs(results.posts)
                setIsPending(false)
            } catch (error) {
                console.error(`error`, error)
            }
        }

        fetchAPi()
    }, [])



    if (isPending) {
        return (
            <div className="flex flex-col items-center py-6">
                <div className="w-full max-w-2xl">
                    <ItemGroup className="flex flex-col gap-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <BlogSkeleton key={i} />
                        ))}
                    </ItemGroup>
                </div>
            </div>
        )
    }



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
