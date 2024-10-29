import LoginTrigger from "./assembler/loginmodal"

export default function Navbar() {
    const links  = [
        {
            name: "Our Story",
            url: "/about"
        },
        {
            name: "Membership",
            url: "/membership"
        }, 
    ]

    const loginlinks = [
        {
            name: "Write",
            url: "/new-story"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]
    return(
        <div className="flex flex-row text-cyberblue w-screen bg-black h-14 items-center justify-between">
            <div className="text-cybergreen ml-12">Catseye</div>
            <div className="flex flex-row gap-x-8 items-center">
            <div className=" flex gap-x-4 p-2">
                {links.map((link) => {
                    return (
                        <a href={link.url} key={link.url} className="text-cyberred">{link.name}</a>
                    )
                })}
                {loginlinks.map((link) => {
                    return (
                        <LoginTrigger key={link.url}>
                            <h1 className="text-cyberred">{link.name}</h1>
                        </LoginTrigger>
                    )
                })}
            </div>
            <div className="mr-12"> 
                <LoginTrigger>
                    <h1>Get Started</h1>
                </LoginTrigger>
            </div>
            </div>
        </div>
    )
}