import './App.css';

function App() {
  return (
    <>
      <div className='card'>
        <span className='logo-close'></span>
        <span className='logo-attention'></span>
        <h4 className='title'>¡Cuidado!</h4>
        <p className='description'>No podrás volver atrás</p>
        <div className='buttons-container'>
          <button className='button button--contained'>Borrar</button>
          <button className='button button--outlined'>Cancelar</button>
        </div>
      </div>
    </>


  );
}

export default App;
