class IndecisionApp extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    options: []
  }
  }
  handleDeleteOptions(){
    this.setState(()=>{
      return{
        options: []
      }
    })
  }
  handlePick(){
    const randomNum = Math.floor(Math.random()* this.state.options.length)
    alert(this.state.options[randomNum])
  }


addhandleOptions(){
  
}

  render(){
    
  }
}


///******************* */

class IndecisionApp extends React.Component{
  constructor(props){
 super(props)

 this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
 this.handlePick = this.handlePick.bind(this)
 this.handleAddOption = this.handleAddOption.bind(this)
 this.state= {
   options: []// ['veinte', 'veintiuno', 'veintidos']
 }
  }
handleDeleteOptions(){
    this.setState(()=>{
      return{
        options: []
      }
    })
  }


  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid item'
    }else if(this.state.options.indexOf(option) > -1){
      return 'Option already exists'
    }
    this.setState((prevState)=>{
      return{
        options: prevState.options.concat(option)
      }
    }

    )
  }
  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of the computer'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick} />
        <Options options = {this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption = {this.handleAddOption}/>
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

const Action = (props)=>{
  return(
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
    </div>
  )
}


// class Action extends React.Component{
//   render(){
//     return(
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//       </div>
//     )
//   }
// }

class Options  extends React.Component{


  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
        <p>{this.props.options.length}</p>
        {
          this.props.options.map((opt)=>{
            return <Option key={opt} optionText={opt} />
            {/* return <p key={opt}>{opt}</p> */}
          })
        }
      </div>
    )

}
}

class Option extends React.Component{
  render(){
    return(
      <div>{this.props.optionText}</div>

    )
  }
}
class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state ={
      error: undefined
    }
  }

handleAddOption(e){
  e.preventDefault();
  const option = e.target.option.value.trim()
  const error = this.props.handleAddOption(option)
this.setState(()=>{
  return {error} //shorthand for error: error
})
}

  render(){
    return(

        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type='text' placeholder='add an option' name='option'/>
            <button>AddOpton</button>
          </form>

        </div>

    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
