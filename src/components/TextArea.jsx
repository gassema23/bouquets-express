function TextArea({
  name,
  placeholder,
  type = "text",
  label = false,
  ...props
}) {
  return (
    <div {...props} className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="flex">
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        className="border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
        rows={5}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea;
