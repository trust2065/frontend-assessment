import React from "react";
import "./App.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ReadMore from "./components/ReadMore";
import ColStretch from "./components/ColStretch";
import Text from "./components/Text";
import MyCard from "./components/MyCard";
import CardFooter from "./components/CardFooter";

function App() {
  const dataList = [
    {
      imageUrl: "http://via.placeholder.com/400x300",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eliusmod tempor incidint ul labore et dolore magna aliquia, Ut enum ad minim veniam, quis nostrud experitaition ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      imageUrl: "http://via.placeholder.com/400x300",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eliusmod tempor incidint ul labore et dolore magna aliquia."
    },
    {
      imageUrl: "http://via.placeholder.com/400x300",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eliusmod tempor incidint ul labore et dolore magna aliquia, Ut enum ad minim veniam, quis nostrud experitaition ullamco."
    }
  ];
  const cards = dataList.map(data => {
    const { imageUrl, text } = data;
    return (
      <ColStretch>
        <MyCard>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Text>
              <Text fontWeight="500" letterSpacing="01">
                {text}
              </Text>
            </Card.Text>
          </Card.Body>
          <CardFooter>
            <ReadMore>Read More</ReadMore>
          </CardFooter>
        </MyCard>
      </ColStretch>
    );
  });
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <Header fontWeight="bolder" color="white" letterSpacing="2">
            Hello Developers!
          </Header>
          <Header variant="h3" color="white" letterSpacing="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Header>
        </Container>
      </Jumbotron>
      <Container>
        <Row>{cards}</Row>
      </Container>
    </div>
  );
}

export default App;
