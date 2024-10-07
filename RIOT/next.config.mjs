/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ddragon.leagueoflegends.com",
                port: "",
                pathname: "/cdn/14.19.1/img/**/**",
            },
            {
                protocol: "https",
                hostname: "ddragon.leagueoflegends.com",
                port: "",
                pathname: "/cdn/img/champion/splash/**",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
