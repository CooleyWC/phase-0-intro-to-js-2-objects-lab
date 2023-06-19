// Write your solution in this file!
const employee = {
    name: "Richard Hendricks",
    streetAddress: "11 Stevenson Dr. Linconshire IL 60115"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, [key]: value
    }
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;

}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key]; 
   return employee;
}