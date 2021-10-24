import './App.css';

import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  handlerAdd = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  setUser = (name, number) => {
    const user = {
      id: Date.now(),
      name,
      number
    }

    const gg = this.state.contacts.filter(item => item.name === user.name)
    
    if(gg.length > 0) {
      alert(user.name + ' уже есть');
    } else {
      this.setState((prevState) => ({contacts: [...prevState.contacts, user]}))
    }

  }

  changeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    })
  }

  removeUser = (id) => {
    const newArr = this.state.contacts.filter((item) => item.id !== id)
    this.setState({
      contacts: newArr
    })
  }

  render() {
    const {contacts, filter} = this.state;
    return (
      <div>
        <h2>Phone book</h2>
        <ContactForm 
          setUser={this.setUser}
        />

        <div>
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            changeFilter={this.changeFilter}
          />
          
          <ContactList
            removeUser={this.removeUser}
            filter={filter}
            contacts={contacts}
          />
        </div>

      </div>
    );
  }
}

export default App;
