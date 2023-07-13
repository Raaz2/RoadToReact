import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

let name = "Rajeev Ranjan Mishra"
let library = "React"

function App() {
  return (
    <>
    <div className="title">
      <h1>Hello World! <br /> Road to {library}</h1>
      <Counter/>
    </div>
    </>
  );
}

export default App;
