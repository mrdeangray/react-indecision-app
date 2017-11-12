class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of the computer'
    const options = ['veinte', 'veintiuno', 'veintidos']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options = {options}/>
        <AddOption />
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

class Action extends React.Component{
  handlePick(){
alert('handle Pick')
  }
  render(){
    return(
      <div>
        <button onClick={this.handlePick}>THis is my action</button>
      </div>
    )
  }
}

class Options  extends React.Component{
    constructor(props){
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
      handleRemoveAll(){
      console.log(this.props.options)
    }

  render(){
    return(
      <div>
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
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
handleAddOption(e){
  e.preventDefault();
  const option = e.target.option.value.trim()
  if (option)
  {alert(option)
  }

}

  render(){
    return(

        <div>
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
