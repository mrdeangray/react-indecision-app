class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handlePick = this.handlePick.bind(this)//render is bound by default already
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state={
      options: [1,2,3,4]
    }
  }

handleDeleteAll(){
 this.setState(()=>({ options: []}))
}

// handleAddOption(option){
// this.setState((prevState)=>{
//   return{
//     options: prevState.options.concat(option)
//   }
// }

// )
  
// }


handleAddOption(option){
  if(!option){
    return 'invalid entry'
  }
  else if(this.state.options.indexOf(option) >-1){
  return 'already exist'
  }
  this.setState((prevState)=>({options: prevState.options.concat(option)}))

}

handlePick(){

  const randNum = Math.floor(Math.random()*this.state.options.length)
  alert(this.state.options[randNum])
}

  render(){
    const title = "Indecision App"
    return(
      <div>
        <p>{`Hay ${this.state.options.length} options`}</p>
        <Header title={title} />
        <Action handlePick = {this.handlePick} hasOptions={this.state.options.length>0}/>
        <Options handleDeleteAll={this.handleDeleteAll} options = {this.state.options} />
        <AddOption handleAddOption = {this.handleAddOption} />
      </div>
    )
   
  }

}

class Header extends React.Component{
render(){
  return(
    <div>
      <h1>{this.props.title}</h1>
    </div>
  )
}
}

class Action extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handlePick} disabled = {!this.props.hasOptions}>Que me deberias hacer </button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteAll}>Borrar Todo</button>
        {
          this.props.options.map((opt)=>{
            return <Option key={opt} optionText={opt} />
              // return<p key={opt}>{opt}</p>
          }
          )
        }
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(<div>{this.props.optionText}</div>)
  }
}


class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state={
      error:undefined
    }
  }

// handleAddOption(e){
//   e.preventDefault()
//   const option = e.target.option.value.trim()
//   const error = this.props.handleAddOption(option)
//   this.setState(()=>{
//     return{error: error}
//   })
// }

handleAddOption(e){
  e.preventDefault()
  const option = e.target.option.value.trim()
  const error = this.props.handleAddOption(option)
  this.setState(()=>({error: error}))

  }


  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type='text' name ='option' placeholder='entrar algo'/>
        <button>Anadir</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
