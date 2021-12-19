import './App.css';

function HelloWorld() {
    return (
        <div id="hello">Hello World!</div>
    );
}

function App() {
    return (
        <div>This is my component: <HelloWorld/></div>
    );
}

export default App;
