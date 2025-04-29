import { Component } from "react";
import trans from './trans.json';
import styles from './t.module.css';

class Transactions extends Component {
  render() {
    return (
      <div className="trans">
        <table className={styles['transaction-history']}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {trans.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;
