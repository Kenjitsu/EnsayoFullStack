import Employee from '../models/Employee.js';

const employeeController = {};

/**
 *  Método (GET) para traer todos los empleados.
 *  */ 
employeeController.getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

/**
 * Método (GET) para traer un único empleado por id.
 */
employeeController.getEmployeeById = async (req, res) => {
    const employeeId = req.params.employeeId;
    const employee = await Employee.findById(employeeId);
    res.json(employee);
}

/**
 * Método (POST) para crear empleados. 
 */
employeeController.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();

    res.json({
        status: 'Empleado guardado'
    });
}

/**
 * Método (PUT) para actualizar un empleado.
 */
employeeController.updateEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    const updatedEmployee = {

        name: req.body.name,

        position: req.body.position,

        office: req.body.office,

        salary: req.body.salary
};
    await Employee.findByIdAndUpdate(employeeId, {$set: updatedEmployee}, {new: true});

    res.json({
        status: 'Empleado Actualizado'
    });
}

/**
 * Método (DELETE) para eliminar un empleado.
 */
employeeController.deleteEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    await Employee.findByIdAndDelete(employeeId);
    res.json({
        status: 'Empleado eliminado'
    });
}

export default employeeController;
