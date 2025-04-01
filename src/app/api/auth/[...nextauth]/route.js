import NextAuth from "next-auth/next";

import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Twitter from "next-auth/providers/twitter";
import GitHub from "next-auth/providers/github";

const authOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        }),
        // Facebook({
        //     clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
        // }),
        // Twitter({
        //     clientId: process.env.TWITTER_OAUTH_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_OAUTH_CLIENT_SECRET,
        // }),
        GitHub({
            clientId: process.env.GITHUB_OAUTH_CLIENT_ID,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
