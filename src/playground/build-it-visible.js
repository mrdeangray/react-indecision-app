class VisibiltyToggle extends React.Component{
constructor(props){// define our constructor and get those props
  super(props) //pass those props up to super
  this.toggleVisibility = this.toggleVisibility.bind(this)
  this.state={
    visibility: false
  }
}


toggleVisibility(){
  this.setState((prevState)=>{
    return{visibility: !prevState.visibility}
  }  )
}
  render(){
    return(
      <div>
        <h1>VisibilyToggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide': 'Show'}</button>
         {this.state.visibility &&<p>Hey, ahi</p>}
      </div>
    )
  }

}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'))


// }
//
//
//
// let visibility = false
// const toggleVisibility = ()=>{
//   visibility = !visibility
//   render()
// }
//
// const render =()=>{
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick = {toggleVisibility}>{visibility ? 'Hide' : 'Show'}</button>
//       {visibility &&<p>Hey, aqui</p>}
//     </div>
//   )
//   ReactDOM.render(template, document.getElementById('app'))
// }
//
//
//
// render()
//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
