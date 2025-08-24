import { Navbar, Button, TodoCard, AddTaskForm } from "./components";
import "./App.css";
import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function App() {
	// Load tasks and isCompleted from localStorage on mount
	const [tasks, setTasks] = useState(() => {
		const savedTasks = JSON.parse(localStorage.getItem("tasks"));
		return savedTasks ? savedTasks : [];
	});
	const [isCompleted, setIsCompleted] = useState(() => {
		const savedTaskStatus = JSON.parse(localStorage.getItem("isCompleted"));
		return savedTaskStatus ? savedTaskStatus : Array(tasks.length).fill(false);
	});

	const [showAddTaskForm, setShowAddTaskForm] = useState(false);
	const [value, setValue] = useState("");

	// Set tasks to localstorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	// Set task completion status to localstorage
	useEffect(() => {
		localStorage.setItem("isCompleted", JSON.stringify(isCompleted));
	}, [isCompleted]);

	function formButtonHandler() {
		if (value.trim() === "") return setShowAddTaskForm(false);

		setTasks([value, ...tasks]);
		setIsCompleted([false, ...isCompleted]);
		setValue("");
		setShowAddTaskForm(false);
	}

	return (
		<>
			<Navbar />
			<Button icon={<IoIosAddCircle />} innerText="Add Task" onClick={() => setShowAddTaskForm(true)} />
			<div className="todo-card-container">
				<TodoCard setTasks={setTasks} isCompleted={isCompleted} setIsCompleted={setIsCompleted} tasks={tasks} noTaskMsg="No new tasks available!" cardTitle="New Tasks" />
			</div>
			<AddTaskForm value={value} setValue={setValue} showAddTaskForm={showAddTaskForm} onClose={formButtonHandler} />
		</>
	);
}

export default App;
