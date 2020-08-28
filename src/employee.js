class Employee {
    static allEmployeeType = [
        'engineer',
        'manager',
        'salesman',
    ];
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    };

    validateType(type) {
        if (!Employee.allEmployeeType.includes(type)) {
            throw new Error(`Employee cannot be of type ${type}`);
        }
    }

    toString() {
        return `${this._name} (${this._type})`;
    }
}
module.exports={
    Employee
};

