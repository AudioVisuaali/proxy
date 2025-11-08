import dotenv from "dotenv";
import proxy from "express-http-proxy";
import express from "express";

dotenv.config({ name: ".env" });

const port = process.env.PORT || 3000;
const proxyURL = process.env.PROXY_URL;
console.log(`Proxying requests to: ${proxyURL}`);

const app = express();

app.use("/", proxy(proxyURL));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
