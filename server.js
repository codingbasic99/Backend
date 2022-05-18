import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Routes Imports
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./dbconn.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import transactionsRoutes from "./routes/transactionsRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

//seeder import
import createFakeProducts from "./seeders/productsSeeder.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

//createFakeProducts(50);
app.use("/products", productsRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/transactions", transactionsRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on 2000 PORT  ${process.env.Port}`);
});
