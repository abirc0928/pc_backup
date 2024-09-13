export default function Checkbox({className, text, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
