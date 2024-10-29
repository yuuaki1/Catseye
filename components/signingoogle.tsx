
import { Button } from "./ui/button"
import { FaGoogle } from "react-icons/fa6"
import { GoogleLogin } from "@/actions/login"
 
export default function SignInGoogle() {
  return (
    <form
      action={GoogleLogin}
    >
      <Button variant="outline" className="rounded-md flex flex-row justify-between items-center bg-black text-white duration-500"><FaGoogle /> Sign in with google</Button>
    </form>
  )
} 