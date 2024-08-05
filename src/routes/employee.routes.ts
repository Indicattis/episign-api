import { Router } from "express";
import { ctr_create_employee, ctr_select_employee } from "../modules/controllers/employee";

const CTR_CRETE_EMPLOYEE = new ctr_create_employee();
const CTR_SELECT_EMPLOYEE = new ctr_select_employee();

const Routes_Employee = Router();

Routes_Employee.post("/employee-create", CTR_CRETE_EMPLOYEE.create);
Routes_Employee.get("/employee-select", CTR_SELECT_EMPLOYEE.fetch);

export {Routes_Employee}