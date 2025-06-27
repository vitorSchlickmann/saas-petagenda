import { Session } from './../src/generated/prisma/index.d';
import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: User & DefaultSession['user'];
    }
}

interface User {
    id: String;
    name: String;
    email: String;
    emailVerified?: String;
    image?: String;
    stripe_customer_id?: String;
    times: String[];
    adress?: String;
    phone?: String;
    status: Boolean;
    createdAt: String;
    updatedAt: String;
}