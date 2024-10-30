import { auth } from "@/auth";
import { Input } from "./ui/input";
import Image from "next/image";
import SignOut from "./signout";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function AltNav() {
    const user = await auth()
    console.log(user)
    return(
        <div className="flex flex-row text-cyberblue w-screen bg-black h-14 items-center justify-center gap-x-10">
            <Link href="/" className="text-cybergreen ml-12 cursor-pointer">Catseye</Link>
            <Input placeholder="Search" className="bg-black text-cyberred w-[1000px]" />
            <Button variant="outline" className="bg-black text-cyberred">
            <Link href="/write">
                Write
            </Link>
            </Button>
            <SignOut>
            <Image src={user?.user?.image as string} width={30} height={30} className="rounded-full"  alt="user"/>
            </SignOut>
            
        </div>
    )
}