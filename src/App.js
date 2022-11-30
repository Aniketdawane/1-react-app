// import logo from './logo.svg';
import './App.css';
import Home from './Componnents/Home';
import Login from './Componnents/Login';

function App() {


  const id = window.prompt('Enter Your id :')
  const Password =parseInt(window.prompt('Enter the password'))

  if( id === 'Swami' && Password ===1014){

    return (
      <>
      <Home/>
      
      </>
      
    );
  }
  else{


    return(
      <>
      <Login/>
      
      </>
    )
  }

}

export default App;
