import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './contactList';
import SingleContact from './SingleContact';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: {},
    };
    this.selectContact = this.selectContact.bind(this);
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/contacts');
      const contacts = response.data;
      this.setState({ contacts });
    } catch (error) {
      console.log(error);
    }
  }
  async selectContact(contactId) {
    try {
      const contInfo = await axios.get(`/api/contacts/${contactId}`);
      const selectedContact = contInfo.data;
      this.setState({ selectedContact });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {this.state.selectedContact.id ? (
            <SingleContact selectedContact={this.state.selectedContact} />
          ) : (
            <ContactList
              selectContact={this.selectContact}
              contacts={this.state.contacts}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
