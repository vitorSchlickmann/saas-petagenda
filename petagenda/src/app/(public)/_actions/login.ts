"use server"

import { signIn } from '@/lib/auth';


export async function handleRegiser(provider: string) {
    await signIn(provider, { redirectTo: '/dashboard'})
}