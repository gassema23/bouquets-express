function Input({ name, placeholder, type = "text", label = false, ...props }) {
  return (
    <div {...props} className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="flex">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className="border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
