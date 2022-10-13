import express  from 'express';
import employeeController from '../controllers/employee.controller.js';
const router = express.Router();

router.get('/', employeeController.getAllEmployees);
router.get('/:employeeId', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:employeeId', employeeController.updateEmployee);
router.delete('/:employeeId', employeeController.deleteEmployee);

export default router