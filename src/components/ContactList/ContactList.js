import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({filter, contacts, removeUser}) => {
    console.log();
    return (
        <ul>
            {
              filter 
                ? contacts.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1).map(({name, number, id}) => 
                    <li key={id}>{name}: {number}
                        <button onClick={() => removeUser(id)}>Delete</button>
                    </li>)
                : contacts.map(({name, number, id}) => (
                    <li key={id}>{name}: {number}
                        <button onClick={() => removeUser(id)}>Delete</button>
                    </li>
                ))
            }
          </ul>
    );
};

ContactList.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.array,
    removeUser: PropTypes.func
  };

export default ContactList;