import { IoIosAddCircle } from "react-icons/io";
import Button from "../Button/Button";
import "./AddTaskForm.css";

function AddTaskForm({ showAddTaskForm, onClose, value, setValue }) {
	if (!showAddTaskForm) return null;

	return (
		<div>
			<div className="form-overlay" onClick={onClose}></div>
			<form onSubmit={(e) => e.preventDefault()} className="add-task-form">
				<h2>Add New Task</h2>
				<input type="text" placeholder="Enter new task" value={value} onChange={(e) => setValue(e.target.value)} />
				<Button onClick={onClose} innerText="Create Task" icon={<IoIosAddCircle />} />
			</form>
		</div>
	);
}

export default AddTaskForm;
