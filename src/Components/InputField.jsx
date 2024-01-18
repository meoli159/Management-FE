export const InputField = ({ label, type, name, placeholder, onChange, ...rest }) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};
