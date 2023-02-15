import { Request, Response } from "express";
import { studentService } from "../services/studentService";

class StudentController {
 
    public getAll(request: Request, response: Response) {
        response.json(studentService.getAll());
    }

    public getStudentById(request: Request, response: Response) {
        let { index } = request.params;

        response.json(studentService.getStudentById(index));
    }

    public save(request: Request, response: Response) {
        let { studentName } = request.body; // Coleta o parâmetro studentName do body da requisição JSON

        response.status(201)
        response.json(studentService.save(studentName));
    }

    public updateStudent(request: Request, response: Response) {
        let { studentName } = request.body; // Coleta o parâmetro studentName da requisição JSON
        let { index } = request.params;

        response.status(201)
        response.json(studentService.updateStudent(index, studentName));
    }

    public deleteStudent(request: Request, response: Response) {
        let { index } = request.params;

        response.json(studentService.deleteStudent(index));
    }
}

export const studentController = new StudentController(); 