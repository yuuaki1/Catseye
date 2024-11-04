"use client"

import SignOut from "@/components/signout";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AltHome() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get("/api/post")
            setPosts(response.data)
        }
        fetchPosts()
    }, [])
    return (
    <>
        <div className="text-cybergreen flex flex-col">
            <div className="mt-10 ml-52 gap-4">
                {posts.map((post) => {
                    return (
                        <Link href={`/posts/${post.id}`} key={post.id} className="bg-transparent p-4 w-[500px] rounded-md gap-4">
                            <h1 className="text-white text-2xl mb-2 hover:underline">{post?.title}</h1>
                            <h2 className="text-neutral-600 mb-2">Posted by {post?.userEmail}</h2>
                            <p className="text-white">{post.desc}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    </>
    );
}