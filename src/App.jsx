import './App.css';
import { Card } from './components';

function App() {

  const title = {
    attention: "¡Cuidado!",
    tick: "¡Vamos!",
    cross: "Upss",
  }
  const description = {
    attention: "No podrás volver atrás",
    tick: "Todo ha salido bien :)",
    cross: "Algo ha pasado",
  }
  
  return (
    <>
      <Card sign={"attention"} title={title.attention} description={description.attention}/>
      <Card sign={"tick"} title={title.tick} description={description.tick}/>
      <Card sign={"cross"} title={title.cross} description={description.cross}/>
    </>
  );
}

export default App;
