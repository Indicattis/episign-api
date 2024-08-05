import { Router } from "express";
import { Routes_Employee } from "./employee.routes";

const routes = Router();

routes.use("/", Routes_Employee)

export { routes };