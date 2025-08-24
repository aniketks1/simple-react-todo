import { IoIosAddCircle } from "react-icons/io";
import "./Button.css";
function Button({ innerText, onClick, icon, className }) {
	return (
		<div className={`button ${className}`}>
			<button onClick={onClick}>
				{icon}
				{innerText}
			</button>
		</div>
	);
}

export default Button;
