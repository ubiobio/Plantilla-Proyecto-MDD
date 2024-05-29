import React from "react";

const Form = ({ title, fields, buttonText, onSubmit, footerContent, backgroundColor }) => {
	return (
        //*Agregar aca el onsubmit y toda su funcion con axios
		<form className="form" style={{ backgroundColor: backgroundColor}}>
			<h1>{title}</h1>
			{fields.map((field, index) => (
				<div className="container_inputs" key={index}>
					<input
						type={field.type || "text"}
						name={field.name}
						placeholder={`${field.placeholder}`}
					/>
				</div>
			))}
			 {buttonText && <button type="submit">{buttonText}</button>}
            {footerContent && <div>{footerContent}</div>}
		</form>
	);
};

export default Form;
