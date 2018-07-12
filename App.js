import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  Button,
  Header,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Title
} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Stripe-Payments</Title>
          </Body>
        </Header>
        <Content>
          <Button>
            <Text>ちゃりんちゃりん</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

