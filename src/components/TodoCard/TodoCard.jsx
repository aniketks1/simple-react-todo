import { CgUnavailable } from "react-icons/cg";
import { ImRadioUnchecked } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import "./TodoCard.css";
import Button from "../Button/Button";
import { MdDeleteForever } from "react-icons/md";

function TodoCard({ cardTitle, noTaskMsg, tasks, isCompleted, setIsCompleted, setTasks }) {
	function handleTaskClick(index) {
		const updatedTasks = [...isCompleted];
		updatedTasks[index] = !updatedTasks[index];
		setIsCompleted(updatedTasks);
	}
	return (
		<div className="todo-card">
			<h2>{cardTitle}</h2>
			<div className={`${tasks.length === 0 ? "" : "hidden"} no-tasks`}>
				<p>
					<CgUnavailable />
					{noTaskMsg}
				</p>
			</div>
			<div className={`${tasks.length === 0 ? "hidden" : ""}`}>
				<ul className="task-list">
					{tasks.map((task, index) => (
						<li onClick={() => handleTaskClick(index)} key={index} className={`${isCompleted[index] ? "checked" : ""} task-item`}>
							<ImRadioUnchecked className={isCompleted[index] ? "hidden" : ""} />
							<FaCheckCircle className={isCompleted[index] ? "" : "hidden"} />
							{task}
						</li>
					))}
				</ul>
				<Button
					className="clear-btn"
					icon={<MdDeleteForever />}
					innerText="Clear All Tasks"
					onClick={() => {
						localStorage.removeItem("tasks");
						localStorage.removeItem("isCompleted");
						setTasks([]);
						setIsCompleted([]);
					}}
				/>
			</div>
		</div>
	);
}

export default TodoCard;
