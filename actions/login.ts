"use server"

import { signIn } from "@/auth";

export const GoogleLogin = async () => {
    await signIn("google", {redirectTo:'/'});
}

export const GithubLogin = async () => {
    await signIn('github', {redirectTo:'/'});
}