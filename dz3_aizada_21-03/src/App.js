import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/reducers/authReduser"; 
import './App.css';

function App() {
 const dispatch = useDispatch()
 const username = useSelector(state => state.auth.username)
 const password = useSelector(state => state.auth.password)
 const isAuth = useSelector(state => state.auth.isAuth)
 const isError = useSelector(state => state.auth.isError)
 const handleUsername = (e) => dispatch ({type: actions.NAME,payload: e.target.value})
 const handlePassword = (e) =>  dispatch ({type: actions.PASS,payload: e.target.value})

 useEffect (() => {
  fetch('http://localhost:8000/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    bady:JSON.stringify({token: localStorage.getItem('token')})
  })
  .then(res => res.json())
  .then(data => {
    if(data.new_token) {
      dispatch({type: actions.AUTH, payload: true})
    }
  })
 }, [])

 const login = () => {
  fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    bady: JSON.stringify({username, password})
 })
 .then(res => res.json ())
 .then(data => {
  if(data.message === 'success') {
    localStorage.setItem('token', data.token)
    dispatch({type: actions.ERROR,password: false})
    dispatch({type: actions.AUTH, password: true})
  } else {
    dispatch({type: actions.ERROR, password: true})
  }
 })
}

if (isAuth) return (
  <div className="App">
    <span>Вход успешно выполнен!</span>
  </div>
)

return (
  <div className="App">
   <h2>Авторизация</h2> 
   <input type="text" value={username} onChange={handleUsername}/>
   <input type="text" value={password} onChange={handlePassword}/>
   <button onClick={login}>Войти</button>
   <div>
    {isError && <span>Неверный логин или пароль</span>}
   </div>
  </div>
);
}




export default App;
