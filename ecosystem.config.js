module.exports = {
  apps: [
    {
      name: "forum/backend",
      script: "./backend/dist/index.js",
      env: {
        NODE_ENV: "production",
        DEBUG: "0", //to enable debug set to "1"
        PORT: "YOUR_PORT",
        MONGODB_URL: "YOUR_MONGODB_URL",
        REDIS_URL: "YOUR_REDIS_URL",
        ACCESS_TOKEN_SECRET: "YOUR_ACCESS_TOKEN_SECRET",
        REFRESH_TOKEN_SECRET: "YOUR_REFRESH_TOKEN_SECRET",
        TOKEN_EXPIRES_IN: "YOUR_TOKEN_EXPIRES_IN",
        CORS: "YOUR_CORS",
        FORUM_NAME: "YOUR_FORUM_NAME"
      },
    },
    {
      name: "forum/frontend",
      script: "./frontend/index.js",
      env: {
        NODE_ENV: "production",
        BACKEND_URL: "YOUR_BACKEND_URL",
        PORT: "YOUR_PORT"
      },
    },
  ],
};
