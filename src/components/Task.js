import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import {ListGroup} from "react-bootstrap";

class Task extends Component {
    render() {
        const {task} = this.props;

        return <ListGroup>
            <ListGroup.Item>
                {task.title} - {task.description} - {task.done}
                <input type="checkbox"/>
                <Button type="submit" variant="primary">
                    X
                </Button>
            </ListGroup.Item>
        </ListGroup>
    }
}

export default Task;