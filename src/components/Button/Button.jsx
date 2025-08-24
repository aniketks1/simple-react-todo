import { IoIosAddCircle } from "react-icons/io";
import "./Button.css";
function Button({ innerText, onClick, icon }) {
	return (
		<div className="button">
			<button onClick={onClick}>
				{icon}
				{innerText}
			</button>
		</div>
	);
}

export default Button;
