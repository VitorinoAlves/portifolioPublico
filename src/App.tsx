import Projetos from './containers/Projetos';
import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import EstiloGlobal, { Contianer } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Contianer>
        <Sidebar></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Contianer>

    </>

  );
}

export default App;
