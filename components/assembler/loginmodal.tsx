"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"
import SignInGoogle from "../signingoogle"
import SignInGithub from "../signingithub"

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
        <DialogContent className="sm:max-w[425px] bg-black text-cyberred flex flex-col items-center justify-center p-20 gap-y-4">
            {!isOldUser ? <>
                <DialogHeader className="gap-y-1 items-center">
                <DialogTitle className="mb-12 text-4xl font-semibold text-white">Join Catseye.</DialogTitle>
                <SignInGoogle />
                <SignInGithub />
             
                
            </DialogHeader>
            </> : <>
            <DialogHeader className="gap-y-1 items-center">
                <DialogTitle className="mb-12 text-4xl font-semibold text-white">Welcome Back</DialogTitle>
                <SignInGoogle />
                <SignInGithub />
            </DialogHeader>
            </>}
        <DialogFooter>
        {isOldUser ? 
        <p className="text-white text-sm">
        Dont have an account? <b onClick={handleClick} className="cursor-pointer hover:underline">Create one</b>
        </p> : 
        <p className="text-white text-sm">
        Already have an account? <b onClick={handleClick} className="cursor-pointer hover:underline">Sign in</b>
        </p> 
        }
        </DialogFooter>
        </DialogContent>
      </Dialog>
    )

  }