import PropTypes from "prop-types";

const InputField = ({
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  labelClass,
  label,
  ref,
  ...rest
}) => {
  return (
    <>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      ref={ref}
      {...rest}
      />
      {label&&<label className={labelClass}>{label}</label>}
      </>
  );
};

InputField.propTypes={
 value:PropTypes.string,
 label:PropTypes.string,
 name:PropTypes.string,
 placeholder:PropTypes.string,
 onChange:PropTypes.func.isRequired
 
}

InputField.propTypes={
    value:"",
    label:"",
    placeholder:"",
    type:"text"
}
export default InputField;
