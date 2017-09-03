import React from 'react';
import { Header, Image } from 'semantic-ui-react';

class Account extends React.Component {
  render() {
    return (
      <Header as="h2" textAlign="center">
        <Image src="/ftlogo.png" /> Account
      </Header>
    );
  }
}
export default Account;
