"use client"

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useBlockNoteEditor } from "@blocknote/react";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
}   

export const Editor = ({
    onChange, 
    initialContent
} : EditorProps) => {
    const editor: BlockNoteEditor = useBlockNoteEditor({
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock : undefined
    })

    return (
        <div>
           
        </div>
    )
}