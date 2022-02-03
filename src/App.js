import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="email"/>
        <input type="file" />
        <input type="number" max={10} />
        <input type='password' />
        <input type='text' required/>
        <select required>
          <option disabled value={0}>Seleccione una opcion</option>
          <option>op2</option>
          <option>op3</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
