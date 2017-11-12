class Person{
  constructor(name = 'Annonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi, I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age}`
  }
}

class Teacher extends Person{
    constructor(name, age, department){
    super(name, age) //access and call functions on an object's parent.
    this.department = department
  }
  getDescription(){
    let description = super.getDescription()// access and call functions on an object's parent.
    if (this.department){
      description += `I am in the ${this.deparment}`
    }
      return description
  }

}


class Student extends Person{
  constructor(name, age, major){
  super(name, age)
  this.major = major
  }
  hasMajor(){
    return !!this.major
  }
  getDescription(){
    let description  = super.getDescription()
    if(this.major)
    description += ` My major is ${this.major}`
    return description
  }
}

class Traveler extends Person{
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHomeLocation(){
    return !!this.homeLocation
  }
  getDescription(){
    let description = super.getDescription()
      if(this.hasHomeLocation()){
        description += ` I am from ${this.homeLocation}`
      }
      return description
  }
}
 class Employee extends Person{
   constructor(name, age, department){
     super(name, age)
     this.department = department
   }
   hasDepartment(){
     return !!this.department
   }
   getDescription(){
    let description = super.getDescription()
    if (this.hasDepartment){
      description+= ` I am in the ${this.department} department`
    }
    return description
  }
 }

//const me = new Person('Dean Gray', 38);
// const me = new Traveler('Dean Gray', 38, 'Florida');
// console.log(me.getGreeting())
// console.log(me.getDescription())

// const me = new Employee('Dean Gray', 38, 'Math');
const me = new Teacher('Dean', 38, 'Math')
console.log(me.getGreeting())
console.log(me.getDescription())


const other = new Traveler();
console.log(other.getGreeting());
console.log(other.getDescription())


//babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
