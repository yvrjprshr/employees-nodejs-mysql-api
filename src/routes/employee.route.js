const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller')

// get all employees
router.get('/', employeeController.getEmployeeList);

// get employee by id
router.get('/:id', employeeController.getEmployeeById);

// add employee
router.post('/', employeeController.createEmployee);

// update employee
router.put('/:id', employeeController.updateEmployee);

// delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;