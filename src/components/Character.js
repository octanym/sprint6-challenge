import styled from 'styled-components';

const Container = styled.div`
  height: 20%;
  text-align: center;
  padding: 1% 2% 1% 2%;
  margin: 1%;
  border-radius: 35px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  color: #443e3e;
`;

const Name = styled.h3`
  font-size: 2rem;
`;

const Details = styled.p`
  font-size: 1rem;
`;

const CharacterCard = (props) => {
  return (
    <Container>
      <Name>{props.characterName}</Name>
      <Details>Birth-Date: {props.characterBirthdate}</Details>
      <Details>Height: {props.characterHeight}</Details>
      <Details>Eye-Color: {props.characterEyeColor}</Details>
      <Details>Hair-Color: {props.characterHairColor}</Details>
    </Container>
  );
};

export default CharacterCard;
