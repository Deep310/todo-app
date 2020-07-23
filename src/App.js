import React , { useState , useEffect }from 'react';
import { Button } from '@material-ui/core'
import { FormControl , Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState(['abc', 'def'])
  const [input, setInput] = useState('');

  //when my app loads, I need to listen to database and fetch new todos as they get added/removed 
  useEffect( () => {
    //this code will run when the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot( snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off when i click the button

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }
  

  return (
    <div className="App">

      <h1>Hello World</h1>
      
      <form>     
        {/*<input value={input} onChange={event => setInput(event.target.value)}/>*/}
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled = {!input} onClick={addTodo} type="submit" variant="contained" color="primary">
          Add todo
        </Button>
        {/*<button  >Add todo</button>*/}
      </form>
      <ul>
        {todos.map( todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
