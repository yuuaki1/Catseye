
import { logout } from "@/actions/logout"
import { Button } from "./ui/button"
 
export default function SignOut({ children } : { children: React.ReactNode }) {
  return (
    <form
      action={logout}
    >
      <Button variant="outline" className="rounded-md flex flex-row justify-between items-center bg-black text-white duration-500">
        {children}
      </Button>
    </form>
  )
} 