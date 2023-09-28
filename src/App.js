import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Profile />
        <MyButton />
      </header>
    </div>
  );
}
function MyButton(){
  return(
    <button>I'm a button</button>
  )
}
const user = {
  name: 'Angust McKlow',
  imageUrl: 'https://1.bp.blogspot.com/-dLVNS4o47ek/XlpWOKlQuCI/AAAAAAABOC8/pC27SWgFUz09nbZxs1FTaeXMKIzvSIPTQCK4BGAYYCw/s125/mcklow_big.jpg',
  imageSize: 90,
};
function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
      <img 
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        stlye={{
          width: user.imageSize,
          height: user.imageSize
        }} 
      />
    </>
  )
}
export default App;
