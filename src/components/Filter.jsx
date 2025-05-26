import { Component } from 'react';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label>
          Find contacts by name:
          <input
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}

export default Filter; 