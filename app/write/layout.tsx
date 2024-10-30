"use client"

import { usePathname } from "next/navigation"

export default function WriteLayout({children} : {children: React.ReactNode}) {
    const pathname = usePathname() 
    const isWrite = pathname.includes("/write")
    return (
        <div>
            {children}
        </div>
    )

}