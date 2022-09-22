var dbConn = require('../../config/db.config');

var Employee = function (employee){
    this.first_name = employee.first_name
    this.last_name = employee.last_name
    this.email = employee.email
    this.phone = employee.phone
    this.organization = employee.organization
    this.designation = employee.designation
    this.salary = employee.salary
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date()
    this.updated_at = new Date()
}

// get all employees
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees', (err, res)=>{
        if(err){
            console.log('error while fetching employees', err);
            result(null, err);
        }else{
            console.log('Employees fetched successfully');
            result(null, res);
        }
    });
}

// get employee by id
Employee.getEmployeeById = (id, result) => {
    dbConn.query('SELECT * FROM employees where id = ?', id, (err, res) => {
        if(err){
            console.log('error while fetching employee by id ', err);
            result(null, err)
        }else{
            result(null, res);
        }
    })
}

// create Employee
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res);
        }
    })
}

// update Employee
Employee.updateEmployee = (id, employeeReqData, result) => {
    dbConn.query('UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=?, status=? WHERE id=?', [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, employeeReqData.phone, employeeReqData.organization, employeeReqData.designation, employeeReqData.salary, employeeReqData.status, id], (err, res)=>{
        if(err){
            console.log(`Error while updating employee`);
            result(null, err);
        }else{
            console.log(`Employee updated successfully`);
            result(null, res);
        }
    })
}

// delete employee
Employee.deleteEmployee = (id, result) => {
    /*
    dbConn.query('DELETE FROM employees where id = ?', [id], (err, res) => {
        if(err){
            console.log('Error while deleting Employee');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    */

    // soft delete [It will not actually be deleted from databse but we will set is_deleted as 1]
    dbConn.query('UPDATE employees SET is_deleted=? where id = ?', [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting employee', err);
            result(null, err);
        }else{
            console.log('Employee deleted successfully');
            result(null, res);
        }
    })
}

module.exports = Employee











