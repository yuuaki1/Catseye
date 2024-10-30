"use client"

import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Write() {
    const [title, setTitle] = useState<string>("");
    const [story, setStory] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async () => {
        const response = await axios.post("/api/post", {
            title: title,
            story: story
        })

        if (response.status === 201) {
            router.push("/")
        }

    }
    return (
        <div className="flex flex-col gap-y-4 mt-12 ml-40">
            <Input type="text" placeholder="Title" className="w-[900pxt] outline-none border-none text-5xl" onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="Write your story here"  className="ml-4 mt-4 w-[900px] h-[550px] bg-transparent outline-none" onChange={(e) => setStory(e.target.value)}/>
            <button onClick={handleSubmit} className="bg-cyberblue text-white p-2 rounded-md w-[200px] ml-4">Submit</button>
        </div>
    )
}