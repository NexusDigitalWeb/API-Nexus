import "dotenv/config";

const configServer = {
  server: {
    port: process.env.PORT || 8080,
  },
  database: {
    username: process.env.MONGO_USER as string,
    password: process.env.MONGO_PASSWORD as string,
    uri: process.env.MONGO_URI as string,
  },
  mailer: {
    host: process.env.MAIL_HOST as string,
    user: process.env.MAIL_USER as string,
    app_password: process.env.APP_PASSWORD_GOOGLE as string,
  },
};

export default configServer;
