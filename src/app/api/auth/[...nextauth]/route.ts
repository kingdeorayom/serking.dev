import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Twitter from "next-auth/providers/twitter";
import GitHub from "next-auth/providers/github";

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
        }),
        // Facebook({
        //     clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID as string,
        //     clientSecret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET as string,
        // }),
        // Twitter({
        //     clientId: process.env.TWITTER_OAUTH_CLIENT_ID as string,
        //     clientSecret: process.env.TWITTER_OAUTH_CLIENT_SECRET as string,
        // }),
        GitHub({
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
