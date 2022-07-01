import { useState } from 'react';
import './../App.css';

const Card = ({sign, title, description}) => {

    const [ open, setOpen ] = useState('1');
    const [ msgClosed, setMsgClosed ] = useState('');

    const handleClickClose = e => {
        e.target.className === "logo-close" && setMsgClosed("Has cerrado el modal");
        e.target.className.includes("button--contained") && sign === "attention" && setMsgClosed("Has confirmado la operación");
        e.target.className.includes("button--contained") && sign === "tick" && setMsgClosed("Has cerrado la pestaña");
        e.target.className.includes("button--outlined") && setMsgClosed("Has cancelado la operación de borrado");
        setOpen(0);
    }
    const handleClickOpen = () => {
    setMsgClosed("");
    setOpen(1);
    }

    const ButtonsContainer = () => {
        if (sign === "attention"){
            return (
                <div className='buttons-container'>
                    <button className='button button--contained' onClick={handleClickClose}>Borrar</button>
                    <button className='button button--outlined' onClick={handleClickClose}>Cancelar</button>
                </div>
            )
        } else if (sign === "tick"){
            return (
            <div className='buttons-container'>
                <button className='button button--contained' onClick={handleClickClose}>Cerrar Pestaña</button>
            </div>
            )
        } else {
            return ("");
        }
    }

    if (open) {
      return (
        <>
        <div className='card'>
            <span className='logo-close' onClick={handleClickClose}></span>
            <span className={'logo-main logo-' + sign}></span>
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
            <ButtonsContainer></ButtonsContainer>
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

  export default Card;