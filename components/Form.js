export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const checked = elements[1].checked;
    const inputText = elements[0].value;
    onAddActivity({ name: inputText, isForGoodWeather: checked });
    event.target.reset();
    elements[0].focus();
  }
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <h1>Input</h1>
      <label htmlFor="text">Name of Activity</label>{" "}
      <input id="text" type="text" />
      <label htmlFor="checkbox">for good weather?</label>
      <input id="checkbox" type="checkbox" />
      <button type="submit">Submit</button>
    </form>
  );
}
