import { Request, Response } from "express";
import { EmployeeDTO } from "../models/employee";
import { create_employee, select_employees } from "../services/employee";



export class ctr_create_employee {
    async create(req: Request, res: Response) {
      const data: EmployeeDTO = req.body;
  
      const newemployee = new create_employee();
  
      try {
        const result = await newemployee.execute(data);
        return res.status(201).json(result);
      } catch (error: any) {
        if (error.message === 'Usuário ja cadastrado.') {
          return res.status(400).json({ error: error.message });
        } else {
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
      }
    }
  
  }
  export class ctr_select_employee {

    async fetch(req: Request, res: Response) {
        const selectEmployees = new select_employees();
        const result = await selectEmployees.fetch();
        return res.status(200).json(result);
    }
  
}
  