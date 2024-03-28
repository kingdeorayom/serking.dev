import NextAuth from "next-auth/next";
import GitHub from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_OAUTH_CLIENT_KEY as string,
            clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET as string,
        }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
