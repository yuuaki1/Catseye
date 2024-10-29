
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa6"
import { GithubLogin } from "@/actions/login"
 
export default function SignInGithub() {
  return (
    <form
      action={GithubLogin}
    >
      <Button variant="outline" className="rounded-md flex flex-row justify-between items-center bg-black text-white duration-500"><FaGithub /> <h1>Sign in with github</h1></Button>
    </form>
  )
} 