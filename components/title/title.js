import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  :hover {
    color: ${(props) => props.customColor};
  }
`;

export default Title;
