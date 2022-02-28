import FacebookLogin from 'react-facebook-login';
import axios from "axios"

axios.interceptors.request.use(function(config){
  const token = sessionStorage.getItem('access_token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function(err){
  return Promise.reject(err)
})

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
      </header>
    </div>
  );
}

export default App;
