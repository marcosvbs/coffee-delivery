import styled from "styled-components";

type Color = "yellow-dark" | "base-text" | "yellow" | "purple";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1.5rem;
`;

export const IntroductionSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1rem;
  }
`;

export const BenefitsList = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
  }
`;

export const BenefitItem = styled.li<{ $color: Color }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;

    color: ${(props) => props.theme.background};

    border-radius: 100%;
    background-color: ${(props) => props.theme[props.$color]};
  }

  span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }
`;
