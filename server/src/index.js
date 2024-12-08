// @ts-check
import settings from "@/settings.js";
// import rateLimit from "@/utils/rate-limit.js";
import { bold, green } from "colorette";
import cors from "cors";
import "dotenv/config";
import express from "express";
import createRouter from "express-file-routing";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import process from "process";

const app = express();
app.use(cors(), morgan("dev"), helmet(), express.json());
// app.use(rateLimit);

(async function() {
	const directory = path.join(process.cwd(), "src", "routes");
	await createRouter(app, { directory });
})();

app.listen(settings.port, () => console.log(bold(green("✓"))));