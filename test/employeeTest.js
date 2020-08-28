const employeeTest = require('ava');
const { Employee } = require('../src/Employee');

employeeTest('Employee toString with name is Tom and type is engineer',t => {
    const employee =new Employee("Tom","engineer");
    t.is("Tom (engineer)",employee.toString());
});
employeeTest('validateType is not allow',t => {
    try{
        new Employee("james","ggg");
        t.fail();
    }catch(e){
        t.is('Employee cannot be of type ggg',e.message);
    }
});
