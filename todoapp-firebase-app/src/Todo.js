import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase';

const Todo = (props) => {
    return (<div>
        {
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <Button onClick={(e)=>{
                    db.collection('todos').doc(props.todo.id).delete();
                }}>Delete item</Button>
            </List>
        }
    </div>);
}

export default Todo;