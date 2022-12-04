import { useState } from 'react';

function Controlled() {
  const [name, setName] = useState<string>('');

  function handleSubmit() {
    alert(`Name: ${name}`);
  }
  return (
    <div>
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Controlled;