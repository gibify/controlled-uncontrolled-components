import { FormEvent, useRef } from 'react';

function Uncontrolled() {
  const inputRef: any = useRef(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    alert(`Name: ${inputRef.current?.value}`);
  }
  return (
    <div>
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
