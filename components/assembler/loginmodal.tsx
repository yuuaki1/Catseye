"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"

  export default function LoginTrigger({children}: {children: React.ReactNode}) {
    const [isOldUser, setIsOldUser] = useState<boolean>(false)
    const handleClick = () => {
        setIsOldUser(!isOldUser)
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="bg-black outline-none">
                {children}
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w[425px] bg-black text-cyberred flex flex-col items-center justify-center">
            {isOldUser ? <>
                <DialogHeader>
                <DialogTitle>Join Catseye.</DialogTitle>
                <DialogDescription>
                    
                </DialogDescription>
            </DialogHeader>
            </> : <>
            <DialogHeader>
                <DialogTitle>Welcome Back</DialogTitle>
                <DialogDescription>
                    
                </DialogDescription>
            </DialogHeader>
            </>}
        <DialogFooter>
          <Button type="submit" onClick={handleClick}>Save changes</Button>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    )

  }