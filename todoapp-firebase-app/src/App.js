import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Todo from './Todo';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    // setTodos(todos.concat(inputText));
    db.collection('todos').add({
      todo: inputText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInputText('');
  }

  useEffect(() => {
    console.log('useEffect');
    //firebase code 
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    });
  }, []);

  return (
    <div className="App">
      <h2>Todo App with FireBase </h2>

      <form onSubmit={(e) => handleClick(e)}>
        <TextField id="standard-basic" label="Write your Todo items"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            // console.log(inputText);
          }} />

        {/* <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            // console.log(inputText);
          }} /> */}
        <Button disabled={!inputText} type='submit' variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      <ul>
        {
          todos.map((todo) => (
            <Todo todo={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
