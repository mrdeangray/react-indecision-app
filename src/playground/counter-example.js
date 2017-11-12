class Counter extends React.Component{
  constructor(props){ //pverride the constructor
    super(props) //bind in the constructor function
    this.handlePlusOne = this.handlePlusOne.bind(this)//bind to the current Component instance
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset= this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  handlePlusOne(){
    this.setState((prevState) =>{
      return{
        count : prevState.count +1
      }
    })
  }

  handleMinusOne(){
    this.setState((prevState)=>{
      return{
        count: prevState.count-1
      }
    })
  }

  handleReset(){
   this.setState(()=>{
     return {
       count: 0
     }
   })
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
//babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
