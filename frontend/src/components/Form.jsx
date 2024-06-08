import PropTypes from 'prop-types';

const Form = ({ title, fields, buttonText, onSubmit, footerContent, backgroundColor }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        onSubmit(data);
    };

    return (
        <form className="form" style={{ backgroundColor: backgroundColor }} onSubmit={handleSubmit}>
            <h1>{title}</h1>
            {fields.map((field, index) => (
                <div className="container_inputs" key={index}>
                    <input
                        type={field.type || "text"}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                        required={field.required}
                        disabled={field.disabled}
                    />
                </div>
            ))}
            {buttonText && <button type="submit">{buttonText}</button>}
            {footerContent && <div>{footerContent}</div>}
        </form>
    );
};

Form.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool
    })).isRequired,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    footerContent: PropTypes.node,
    backgroundColor: PropTypes.string
};

Form.defaultProps = {
    title: '',
    onSubmit: () => {},
  };

export default Form;
