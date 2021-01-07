import logo from './logo.svg';
import './App.css';

const value = 100;
const flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          color: 'red',
          fontWeight: 'bold'
        }}>
          Hello World!
        </p>
        {value}
        <p>{value - 50}</p>
        {flag && 'flag is true'}
        {flag ? 'flag is true' : 'flag is false'}
        {undefined}
        {null}
        {false}
        {true}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
