import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setNewTasks] = useState ([]);

    function handleAddTask(e) {
        e.preventDefault();
        setNewTasks((prevTasks) => [...prevTasks, {
            id: 1,
            name: newTask,
            completed: false,
        }]);
        setNewTask('')
    }

    return (
        <Card>
            <Card.Title>Halo border</Card.Title>
            <Card.Body>
                <form>
                    <div className="flex item-center gap-x-2">
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                        <Button onClick={handleAddTask}>Add task</Button>
                    </div>
                </form>
            </Card.Body>
            <Card.Footer>
                You have {tasks.length} task
            </Card.Footer>
        </Card>
    )
}