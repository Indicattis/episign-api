import { prisma } from "../../prisma";
import { EmployeeDTO } from "../models/employee";






export class create_employee {
  async execute(data: EmployeeDTO): Promise<EmployeeDTO> {
    const existingEmployeeRegister = await prisma.employee.findUnique({
      where: {
        emp_register: data.emp_register,
      },
    });
    
    if (existingEmployeeRegister) {
      throw new Error('Usuário ja cadastrado.');
    }

    const item = await prisma.employee.create({
      data: {
        emp_name: data.emp_name,
        emp_register: data.emp_register,
        hash: data.hash,
        token: data.token,
      },
    });

    return item;
  }
}

export class select_employees {
    async fetch(): Promise<EmployeeDTO[]> {
        const items = await prisma.employee.findMany();
        return items;
    }
  }