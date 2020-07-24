import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal} from "@material-ui/core"
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #ED5565',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState();

    const updateTodo = () => {
        //update todo with new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true } )
        setOpen(false)
    }


    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Edit your todo</h1>
                <input placeHolder={props.todo.todo} value={input} onChange={event => {setInput(event.target.value)}}></input>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary = {props.todo.todo} secondary = "Deadline:" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit Me</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
