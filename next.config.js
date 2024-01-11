/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
        "localhost",
        "momentum-roadside.com",
	"jenkins.mehdi.cloud",
	"192.168.0.17"
    ],
},
}

module.exports = nextConfig


