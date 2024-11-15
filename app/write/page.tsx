"use client"

import { Input } from "@/components/ui/input";

import "@blocknote/core/fonts/inter.css"
import { BlockNoteView } from "@blocknote/mantine"
import "@blocknote/mantine/style.css"
import { useCreateBlockNote } from "@blocknote/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Write() {
    const [title, setTitle] = useState<string>("");
    const [story, setStory] = useState<string>("")
    const router = useRouter()
    const editor = useCreateBlockNote()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await axios.post("/api/post", {
            title: title,
            story: story
        })

        if (response.status === 201) {
            router.push("/")
        }

    }
    return (
        <form className="flex flex-col gap-y-4 mt-12 ml-40">
            <Input type="text" placeholder="Title" className="w-[900pxt] outline-none border-none text-5xl h-20" onChange={(e) => setTitle(e.target.value)}/>
            <BlockNoteView editor={editor} onChange={(e) => setStory(e.target.value)} />
            <button onClick={handleSubmit} className="bg-cyberblue text-white p-2 rounded-md w-[200px] ml-4">Submit</button>
        </form>
    )
}