import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error handler
app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));