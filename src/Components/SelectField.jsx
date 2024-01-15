export const SelectField = ({ label, name, options, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select className="form-control" name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
