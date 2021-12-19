import './App.css';

function HelloWorld(props) {
    console.log(props);
    return (
        <div id="hello">
            <h3>{props.subtitle}</h3>
            <p>{props.myText}</p>
        </div>
    );
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