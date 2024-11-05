"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Post() {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(`/api/articles/${id}`)
                    setPost(response.data)
                } catch (err) {
                    console.error(err)
                }
            } 
            fetchPost()
        }
    }, [id])

    if (!post) return <h1>Loading...</h1>

    return (
        <div className="ml-40 mt-12 bg-transparent">
            <h1 className="text-5xl pb-10">{post.title}</h1>
            <h2 className="text-neutral-600 pb-4">Posted by {post.userEmail}</h2>
            <p>{post.desc}</p>
        </div>
    )
}