import { Component } from "react";
import styles from './btns.module.css'; // стили писала ии, но весь остальной код мой, знаю вы такое не любите, но думаю что стили - это не критично

class Rev extends Component {
  // rev - эта типа ревью, но сокращенно, хз как по другому компонент назвать
  state = {};
  render() {
    return (
      <div className="rev">
        <h2>Please give feedback</h2>
        <div className="btns">
          <button className={styles.goodBtn} onClick={() => this.props.onFeedback('good')}>good</button>
          <button className={styles.neutralBtn} onClick={() => this.props.onFeedback('neutral')}>neutral</button>
          <button className={styles.badBtn} onClick={() => this.props.onFeedback('bad')}>bad</button>

        </div>
      </div>
    );
  }
}

export default Rev;
