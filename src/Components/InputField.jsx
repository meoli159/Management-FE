export const InputField = ({ label, type, name, placeholder, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
