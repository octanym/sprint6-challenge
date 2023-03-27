import { Card, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';
import styled from 'styled-components';

export const CharacterCard = (props) => {
  return (
    <Col xs="12" s="6" md="4">
      <Card>
        <CardBody>
          <CardTitle>{props.characterName}</CardTitle>
          <CardSubtitle>Birth-Date: {props.characterBirthdate}</CardSubtitle>
          <CardSubtitle>Height: {props.characterHeight}</CardSubtitle>
          <CardSubtitle>Eye-Color: {props.characterEyeColor}</CardSubtitle>
          <CardSubtitle>Hair-Color: {props.characterHairColor}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
