import { ThemeProvider } from 'styled-components';

import Projetos from './containers/Projetos';
import Sidebar from './containers/Sidebar';
import Sobre from './containers/Sobre';
import EstiloGlobal, { Contianer } from './styles';
import temaLight from './themes/light';
import temaDark from './themes/dark';
import { useState } from 'react';

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema(){
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal></EstiloGlobal>
      <Contianer>
        <Sidebar trocaTema={trocaTema}></Sidebar>
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Contianer>

    </ThemeProvider>

  );
}

export default App;
