import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia, modi harum quae animi sint facilis ex repellendus cupiditate id aperiam dolores odit exercitationem voluptates iusto. Quaerat recusandae laboriosam ex?</Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=VitorinoAlves&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VitorinoAlves&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre;
