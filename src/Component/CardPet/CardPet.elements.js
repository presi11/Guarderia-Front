import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 450px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#ffa900, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;

  h1 {
    text-align: center;
  }
`;
export const Aditional = styled.div`
  position: absolute;
  width: 150px;
  height: 100%;
  background: linear-gradient(#ffa900, #ffa900);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;

  &:hover {
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
`;

export const PetCard = styled.div`
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
`;

export const NamePetAndAge = styled.div`
  top: ${({ age }) => (age ? "15%" : "80%")};
  left: 30%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
  position: absolute;
`;

export const ImgContainerPet = styled.div`
  margin-top: 50%;
  margin-left: 20%;
  background-image: url(${(props) => props.perro});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const MoreInfoPet = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  top: 0;
  width: 300px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;

  h1,
  span {
    color: black;
    margin-bottom: 0;
  }
`;

export const ContainerList = styled.div`
  width: 150px;
  color: black;
  text-align: initial;
  padding-left: 30px;
`;

export const Coords = styled.div`
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;

  span {
    float: left;
  }
`;

export const PetDescription = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
  h1,
  p {
    color: black;
  }
`;

export const Help = styled.div`
  position: absolute;
  color: black;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.6em;
`;
