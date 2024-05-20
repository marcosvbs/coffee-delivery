import { Header } from "../../components/Header";
import {
  BenefitItem,
  BenefitsList,
  HomeContainer,
  Introduction,
  IntroductionSection,
} from "./styles";
import Banner from "../../assets/Banner.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <IntroductionSection>
        <div>
          <Introduction>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Introduction>

          <BenefitsList>
            <ul>
              <BenefitItem $color={"yellow-dark"}>
                <div>
                  <ShoppingCart size={16} weight={"fill"} />
                </div>
                <span>Compra simples e segura</span>
              </BenefitItem>

              <BenefitItem $color={"base-text"}>
                <div>
                  <Package size={16} weight={"fill"} />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </BenefitItem>

              <BenefitItem $color={"yellow"}>
                <div>
                  <Timer size={16} weight={"fill"} />
                </div>
                <span>Entrega rápida e rastreada</span>
              </BenefitItem>

              <BenefitItem $color={"purple"}>
                <div>
                  <Coffee size={16} weight={"fill"} />
                </div>
                <span>O café chega fresquinho até você</span>
              </BenefitItem>
            </ul>
          </BenefitsList>
        </div>

        <img src={Banner} alt={"Coffee Delivery Banner"} />
      </IntroductionSection>
    </HomeContainer>
  );
}
