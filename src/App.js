import './App.css';
import React from "react";

/*function HelloWorld(props) {
    console.log(props);
    return (
        <div id="hello">
            <h3>{props.subtitle}</h3>
            <p>{props.myText}</p>
        </div>
    );
}*/

class HelloWorld extends React.Component {
    state = {
        show: true
    }

    render() {
        if (this.state.show) {
            return (
                <div id="hello">
                    <h3>{this.props.subtitle}</h3>
                    <p>{this.props.myText}</p>
                    <button type="submit" onClick={() => this.setState({show: !this.state.show})}>Toggle show</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>There are <b>no</b> elements to show.</h1>
                    <button type="submit" onClick={() => this.setState({show: !this.state.show})}>Show Again</button>
                </div>
            )
        }
    }
}

function App() {
    return (
        <div>This is my component:
            <HelloWorld myText={"HOllllaaaa"} subtitle={"Lorem Ipsun"}/>
            <HelloWorld myText={"Hello Juan"}/>
            <HelloWorld myText={"Hello World!"}/>
        </div>
    );
}

export default App;