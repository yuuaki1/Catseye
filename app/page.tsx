import LoginTrigger from "@/components/assembler/loginmodal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-cybergreen flex flex-col">
      Hello
      <div className="mt-20 ml-52">
      <LoginTrigger>
        Get Started
      </LoginTrigger>
      </div>
    </div>
  );
}
