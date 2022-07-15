import "../Input/Input.css";

export function Input({ setField, name, label, value }) {
  function handleChange(event) {
    setField(event.target.value);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input type="text" name={name} value={value} onChange={handleChange} />
    </div>
  );
}
