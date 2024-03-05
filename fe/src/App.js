import './App.css';
import Login from './scenes/login';
import { CookiesProvider, useCookies} from 'react-cookies'

function App() {
  const [cookies, setCookies, removeCookie] = useCookies(['user'])

  function handleLogin(user) {
    var expiryDate = new Date().getDate() + 1
    setCookies('user', user, { 
      path: '/', 
      expires: expiryDate,
      httpOnly: true
    })
  }

  function checkCookies() {
    // get cookies and decode
    
  }
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
