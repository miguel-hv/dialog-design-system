import { useState } from 'react';
import './App.css';

function App() {
  const [ open, setOpen ] = useState('1');
  const [ msgClosed, setMsgClosed ] = useState('');

  const handleClickClose = e => {
    e.target.className === "logo-close" && setMsgClosed("Has cerrado el modal");
    e.target.className.includes("button--contained") && setMsgClosed("Has confirmado la operación de borrarado");
    e.target.className.includes("button--outlined") && setMsgClosed("Has cancelado la operación de borrarado");
    setOpen(0);
  }
  const handleClickOpen = () => {
    setMsgClosed("");
    setOpen(1);
  }
  const Card = () => {
    if (open) {
      return (
        <>
        <div className='card'>
          <span className='logo-close' onClick={handleClickClose}></span>
          <span className='logo-attention'></span>
          <h4 className='title'>¡Cuidado!</h4>
          <p className='description'>No podrás volver atrás</p>
          <div className='buttons-container'>
            <button className='button button--contained' onClick={handleClickClose}>Borrar</button>
            <button className='button button--outlined' onClick={handleClickClose}>Cancelar</button>
          </div>
        </div>
      </>
      );
    } else {
      return (
        <div className='card'>
          <p>{msgClosed}</p>
          <button className='button button--contained' onClick={handleClickOpen}>Abrir</button>
        </div>
      )
    }
  }



  return (

    <Card></Card>

  );
}

export default App;
