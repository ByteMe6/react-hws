import { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { contact, onDelete } = this.props;
    const { id, name, number } = contact;

    return (
      <li>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
}

export default ContactItem; 