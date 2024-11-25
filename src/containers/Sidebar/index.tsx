import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Carlos Alves</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>VitorinoAlves</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro de qualidade
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>

  </aside>
)

export default Sidebar;
