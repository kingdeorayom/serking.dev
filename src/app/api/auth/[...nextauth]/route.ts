import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const authOptions: AuthOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
        }),
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
