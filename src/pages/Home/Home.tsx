import { NavLink } from "react-router-dom";

import {
  BodyCart,
  BodyImageHomeless,
  BtnSupport,
  CartCoat,
  CartInstitution,
  CartProjects,
  CartSearch,
  ContainerHome,
  LegendImageHomeless,
  Message,
} from "./styles";

import imgHomeless from "../../img/homeless.png";
import Header from "../../components/Header/Header";
import imgArrow from "../../img/Arrow6.png";
import AnimatedPage from "../../components/AnimatedPage";
import Footer from "../../components/Footer/Footer";
import ResetPage from "../../ResetPage";

export default function Home() {
  return (
    <ContainerHome id="top">
      <Header />
      <AnimatedPage>
      <main>
        <BodyImageHomeless>
          <img
            src={imgHomeless}
            alt="Homem com carrinho nas ruas de são paulo"
          />
          <LegendImageHomeless>
            <Message>
              <h1>A parte invisível do Brasil</h1>
              <p>
                Moradores de rua sofrem preconceito constante e são auto
                denominados marginais ou bandidos, muitas vezes não sendo.
                Muitos possuem família com filhos, e por falta de oportunidades
                sofrem nas ruas. Moradores de rua são invisíveis aos olhos das
                pessoas.
              </p>
              <BtnSupport>Apoiar</BtnSupport>
            </Message>
          </LegendImageHomeless>
        </BodyImageHomeless>
        <BodyCart>
          <CartCoat>
            <div>
              <h2>Campanha do Agasalho</h2>
              <p>Clique abaixo para ajudar com doações</p>
              <NavLink to="/campanhadoagasalho" replace>
                <img src={imgArrow} alt="Arrow rigth" />
              </NavLink>
            </div>
          </CartCoat>

          <CartInstitution>
            <div>
              <h2>É uma instituição buscando ajudar?</h2>
              <p>Clique abaixo para acessar</p>
              <NavLink to="/cadastro">
                <img src={imgArrow} alt="Arrow rigth" />
              </NavLink>
            </div>
          </CartInstitution>

          <CartProjects>
            <div>
              <h2>Sobre Nós</h2>
              <p>Clique abaixo para saber mais</p>
              <NavLink to="/sobrenos">
                <img src={imgArrow} alt="Arrow rigth" />
              </NavLink>
            </div>
          </CartProjects>

          <CartSearch>
            <div>
              <h2>Está buscando alguém?</h2>
              <p>Clique abaixo para realizar uma busca</p>
              <NavLink to="/pesquisadesaparecidos">
                <img src={imgArrow} alt="Arrow rigth" />
              </NavLink>
            </div>
          </CartSearch>
        </BodyCart>
      </main>
      <Footer color={'rgba(165, 0, 226, 1)'}/>
      <ResetPage/>
      </AnimatedPage>
    </ContainerHome>
  );
}
