import { Router } from 'express';
import { studentController } from './controllers/studentController';

export const router: Router = Router();

router.get('/students', studentController.getAll);

router.get('/students/:index', studentController.getStudentById);

router.post('/students', studentController.save);

router.put('/students/:index', studentController.updateStudent);

router.delete('/students/:index', studentController.deleteStudent);
