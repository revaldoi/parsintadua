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
            id: Math.floor(Math.random() * Date.now()),
            name: newTask,
            completed: false,
        }]);
        setNewTask('')
    }

    function handleCompleteTask(id) {
        console.log(id)
        const updateTask = tasks.map((task) => {
        if (id === task.id) {
            return {
                ...task, 
                completed: !task.completed
            }
        }
        return task;
        });
        setNewTasks(updateTask)
    }

    function handleRemoveTask(id) {
        const removeTask = tasks.filter(task => task.id !==id)
        setNewTasks(removeTask)
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
                {tasks.length > 0 ? (
                    <ol className={'space-y-2 mt-4'}>
                        {tasks.map((task) => (
                            <li key={task.id} className={'flex items-center justify-between'}>
                                <span>{task.name} {task.completed ? 'Completed' : 'Uncompletted'}</span>
                                
                                <div className={'flex items-center gap-x-2'}>
                                    <button onClick={() => handleCompleteTask(task.id)} className={'text-white bg-green-400 p-1 text-xs'}>
                                        Mark as {task.completed ? 'complete' : 'incompleted'}</button>
                                    <button onClick={() => handleRemoveTask(task.id)} className={'text-white bg-red-400 p-1 text-xs'}>Remove</button>
                                </div>  
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>
                You have {tasks.length} task
            </Card.Footer>
        </Card>
    )
}