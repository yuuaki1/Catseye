import { github, google } from "better-auth/social-providers";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        google, 
        github
    ]
})