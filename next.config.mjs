/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.scdn.co",
            },
        ],
    },
    compiler: {
        removeConsole: false,
    },
};

export default nextConfig;
