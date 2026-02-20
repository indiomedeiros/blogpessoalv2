function FormInput({
  placeholder,
  name,
  id,
  type,
  labelText,
}: {
  placeholder: string;
  type: string;
  id: string;
  name: string;
  labelText: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col text-xs gap-2">
      {labelText}
      <input
        className="border  border-gray-300 bg-white p2 h-8 rounded-lg p-3"
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
      />
    </label>
  );
}

export default FormInput;
