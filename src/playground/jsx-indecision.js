class Button extends React.Component{
  scream(){
    alert('hey1');
  }
  render(){
    return<button onClick={this.scream}>Click</button>
  }
}




console.log("app.js esta corriendo");

const fullName = 'Dean Gray';

const getFirstName = (x)=>{
  return x.split(' ')[0];
}

const multiplier = {
  numbers: [0,1,2,3,4],
  factor: 4,
  multiply(){
    return this.numbers.map((n) => n*this.factor)
  }
}



const user = {
  nums: [0,1,2],
  factor: 10,
  name: 'Dean',
  age: 38,
  location: 'Florida',
  joinAll(){
    return this.name+this.age+this.location
  },
  multiply(){
 return this.nums.map((x) => x * this.factor)
  },
  getFirstName(x){
    return x.split(' ')[0]
  }
}
const getFirstName2 = (x)=> x.split(' ')[0];

console.log('First name is ', getFirstName('Dean Gray'));

console.log(user.joinAll())
console.log(user.multiply())
console.log(user.getFirstName('Dean Gray'))


const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
  versions: ['one', 'two']
}
const template =(
<div>


</div>
);
let count = 0
const plusOne =  ()=> {
  count++;
  renderApp();
  console.log('add one', count)
}

const minusOne = ()=>{
count--;
renderApp();
  console.log('minus one')
}
const reset = ()=> {
  count=0
renderApp();
  console.log('reset')
}
 const addTen = ()=>{
   count = count +10;
   renderApp();
   console.log('add10')
 }
const removeAll = ()=>{
  app.options = []
  renderApp();
}

 const onFormSubmit = (e)=>{
   e.preventDefault()

   const option = e.target.elements.option.value
   if(option){
     app.options.push(option)
     e.target.elements.option.value=''
     renderApp();
   }

 }




const onMakeDecision = () =>{
  const randomNum =  Math.floor(Math.random() * app.options.length)
  alert(app.options[randomNum])
  renderApp()
}

const onMakeDecision2 = ()=>{
  const randomNum = Math.floor(Math.random() * app.options.length)
  alert(app.options[randomNum])
  renderApp()
}
let buttonName = 'show details'
let buttonState = true
const showDetails = ()=>{
  if (buttonState){
    buttonName = 'Hide details'
    buttonState = false
  }
  else
  {
    buttonName = 'Show details'
    buttonState = true
  }

  renderApp();
}

const appRoot  = document.getElementById('app');

ReactDOM.render(template, appRoot);

// ReactDOM.render(<Button/>, document.getElementById('app3'))


const renderApp = ()=>{
  const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length >0 ? 'Here are your options:' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick = {showDetails}>{buttonName}</button>
    <p>{buttonState ==false ? 'Here are some details' : ''}</p>
    <button disabled={app.options.length ===0} onClick={onMakeDecision}>MakeDecision</button>
    <button onClick={removeAll}>Remove All</button>
<ol>
  {
  app.options.map((opt)=>{
    return <li key={opt}>{opt}</li>
  })
}
</ol>




<form onSubmit={onFormSubmit}>
  <input type='text' placeholder='Enter something' name='option'/>
  <button>Add </button>
</form>
    <button onClick={plusOne}>Aumentar</button>
    <button onClick={minusOne}>Minus One</button>
    <button onClick={reset}>Reinicio</button>
    <button onClick={addTen}>addTen</button>
  </div>
  );

  ReactDOM.render(template2, document.getElementById('app'));
}

renderApp();
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
