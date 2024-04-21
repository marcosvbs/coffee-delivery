import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.5rem;
      background: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;

      color: ${(props) => props.theme["purple-dark"]};
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
    }

    button {
      display: flex;

      padding: 0.5rem;
      background: ${(props) => props.theme["yellow-light"]};
      border: none;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`;
