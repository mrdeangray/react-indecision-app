class Person{
  constructor(name, age, gender = 'unknown'){
    this.name = name
    this.age = age
    this.gender = gender
  }

  getDescription(){
    return `${this.name} is ${this.age} year old ${this.gender}.`
  }
}

class Student extends Person{
  constructor(name, age, gender, major){
    super(name, age, gender)
    this.major = major
  }
  getDescription(){
    return `${this.name} is majoring in ${this.major}`
  }
}

class Teacher extends Person{
  constructor(name, age, gender, department){
    super(name, age,gender )
    this.department = department
  }
  getDescription(){
    let description = super.getDescription()
    if (this.department){
      description+= ` ${this.name} is a ${this.department} teacher`
    }
    return description
  }
}

class Employee extends Person{
  constructor(name, age, gender, location){
  super(name, age, gender)
  this.location = location
  }
  getDescription(){
    let description = super.getDescription()
    if(this.description){
      description += `${this.name} is working in the ${this.location} location}` 
    }
  }
}

class Patient extends Person{
  constructor(name, age, gender, illness){
    super(name, age, gender)
    this.illness = illness
  }
  getDescription(){
    let description = super.getDescription()
    if (this.illness){
      description +=`${this.name} illness is: ${this.illness}`
    }
    return description
  }
}

const p = new Person("dean", 38)
console.log(p.getDescription())

const s = new Student("Juan", 18, "IT")
console.log(s.getDescription())

const t = new Teacher("Mr. Gray", 38, "male", "math")
console.log(t.getDescription())

const patient = new Patient('Mary', 40, "female", "back pain" )
console.log(patient.getDescription())

//babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
