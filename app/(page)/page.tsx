"use client"

import SignOut from "@/components/signout";
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
            Hello
            <div className="mt-20 ml-52">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="bg-cyberblue p-4 w-[500px] rounded-md">
                            <h1 className="text-white text-2xl">{post.title}</h1>
                            <p className="text-white">{post.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
    );
}