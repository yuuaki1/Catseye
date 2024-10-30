import { auth } from "@/auth";
import LoginTrigger from "@/components/assembler/loginmodal";
import SignOut from "@/components/signout";

export default async function Home() {
  const session = await auth()
  return (
    <div className="text-cybergreen flex flex-col">
      Hello
      <div className="mt-20 ml-52">
      {!session ? 
      <LoginTrigger>
        Read more
      </LoginTrigger> : 
      <SignOut>
        Had enough?
        </SignOut>
        }
      </div>
    </div>
  );
}
