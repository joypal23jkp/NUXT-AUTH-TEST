import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";

const config = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '333967899513-9pl4bi3tb7i8esp1hbaf2l8gklrl351d.apps.googleusercontent.com',
            clientSecret: process.env.GOOGLE_SECRET || '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',
        }),
        Github({
            clientId: process.env.GITHUB_ID || '2a0b8f519b52bf6364f2',
            clientSecret: process.env.GITHUB_SECRET || 'c677a2eb6552ce083afb43ab1bda202d980fa4d0',
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(config);