const filledArray = ["Gray", "Worm", "Security", 1]

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}


function createTimeInEvent(employee, event) {
    const [date, hour] = event.split(" ")
    const eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeInEvents.push(eventObj)
    return employee
}


function createTimeOutEvent(employee, event) {
    const [date, hour] = event.split(" ")
    const eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeOutEvents.push(eventObj)
    return employee
}

function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date)
    const timeOut = employee.timeOutEvents.find(event => event.date === date)
    
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(employee, date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return employee.payPerHour * hours
} 

function calculatePayroll(employeeRecords) {
    const record = employeeRecords.map(employee => allWagesFor.call(employee))
    
    return record.reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}