import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
data: ''
}
this.updateState = this.updateState.bind(this);
this.clearInput = this.clearInput.bind(this);
}
updateState(e) {
this.setState({data: e.target.value});
}
clearInput() {
this.setState({data:''});
ReactDOM.findDOMNode(this.ref.myText).focus();
}
render() {
return(
<div>
<input type="text" value="{this.state.data}" onChange="{this.updateState}" ref='myText' />
<h4>{this.state.data}</h4>
<button onClick = {this.clearInput}>CLEAR</button>
</div>
)
}
}
export default App;

