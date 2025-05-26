import { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList; 