const employees = [
    {
        id: 1,
        name: 'Alberto'
    },
    {
        id: 2,
        name: 'Mariana'
    },
    {
        id: 3,
        name: 'Gonzalo'
    }
]

const salaries = [
    {
        id: 1,
        salary: 1500
    },
    {
        id: 2,
        salary: 2000
    }
]

getEmployeeById = (id, callback) => {
    const employee = employees.find((e) => e.id === id);

    if (employee) {
        callback(null, employee);
        return;
    }
    callback(new Error("The Employee does not exist"));

}

const id = 5;

getEmployeeById(id, (error, e) => {
    if (error) {
        console.log("ERROR!!!!....");
        console.log(error);
        return;
    }
    console.log(`El empleado: ${e.name}...`);
});

