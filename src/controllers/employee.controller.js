const EmployeeModel = require('../models/employee.model');

// get all employee list
exports.getEmployeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employees)=>{
        if(err){
            console.log(err);
        }
        console.log(employees);
        res.send(employees)
    })
}

// get employee by id
exports.getEmployeeById = (req, res) => {
    EmployeeModel.getEmployeeById(req.params.id, (err, employee)=>{
        if(err) res.send(err);
        console.log(`single employee detail whose id is ${req.params.id}:`, employee);
        res.send(employee);
    })
}

// add employee
exports.createEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    // check if data is null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.sendStatus(400).send({success: false, message: 'Please fill the fields'})
    }else{
        console.log('valid data');
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err){
                res.send(err);
            }
            res.json({status: true, message: 'Employee Added Successfully', data: employee.insertId})
        })
    }
}

// update employee
exports.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    // check if data is null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.sendStatus(400).send({success: false, message: 'Please fill the fields'})
    }else{
        console.log('valid data');
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err){
                res.send(err);
            }
            res.json({status: true, message: 'Employee Updated Successfully'})
        })
    }
}

// delete Employee
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if(err){
            res.send(err);
        }
        res.json({success: true, message: 'Employee deleted successfully'});
    })
}