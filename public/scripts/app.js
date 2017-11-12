"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, age) {
    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  _createClass(Person, [{
    key: "getDescription",
    value: function getDescription() {
      return this.name + " is " + this.age + " year old " + this.gender + ".";
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, gender, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age, gender));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: "getDescription",
    value: function getDescription() {
      return this.name + " is majoring in " + this.major;
    }
  }]);

  return Student;
}(Person);

var Teacher = function (_Person2) {
  _inherits(Teacher, _Person2);

  function Teacher(name, age, gender, department) {
    _classCallCheck(this, Teacher);

    var _this2 = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name, age, gender));

    _this2.department = department;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Teacher.prototype.__proto__ || Object.getPrototypeOf(Teacher.prototype), "getDescription", this).call(this);
      if (this.department) {
        description += " " + this.name + " is a " + this.department + " teacher";
      }
      return description;
    }
  }]);

  return Teacher;
}(Person);

var Employee = function (_Person3) {
  _inherits(Employee, _Person3);

  function Employee(name, age, gender, location) {
    _classCallCheck(this, Employee);

    var _this3 = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, age, gender));

    _this3.location = location;
    return _this3;
  }

  _createClass(Employee, [{
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), "getDescription", this).call(this);
      if (this.description) {
        description += this.name + " is working in the " + this.location + " location}";
      }
    }
  }]);

  return Employee;
}(Person);

var Patient = function (_Person4) {
  _inherits(Patient, _Person4);

  function Patient(name, age, gender, illness) {
    _classCallCheck(this, Patient);

    var _this4 = _possibleConstructorReturn(this, (Patient.__proto__ || Object.getPrototypeOf(Patient)).call(this, name, age, gender));

    _this4.illness = illness;
    return _this4;
  }

  _createClass(Patient, [{
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Patient.prototype.__proto__ || Object.getPrototypeOf(Patient.prototype), "getDescription", this).call(this);
      if (this.illness) {
        description += this.name + " illness is: " + this.illness;
      }
      return description;
    }
  }]);

  return Patient;
}(Person);

var p = new Person("dean", 38);
console.log(p.getDescription());

var s = new Student("Juan", 18, "IT");
console.log(s.getDescription());

var t = new Teacher("Mr. Gray", 38, "male", "math");
console.log(t.getDescription());

var patient = new Patient('Mary', 40, "female", "back pain");
console.log(patient.getDescription());

//babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
