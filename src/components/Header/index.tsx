import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { StyledHeader } from "./styles";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="Coffe Delivery Logo" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" color={"#8047F8"} />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" color={"#C47F17"} />
        </button>
      </nav>
    </StyledHeader>
  );
}
