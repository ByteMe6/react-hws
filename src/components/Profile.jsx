import { Component } from "react";
import styles from './Profile.module.css';

class Profile extends Component {
    state = {  } 
    render() { 
        return <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={this.props.avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{this.props.username}</p>
          <p className={styles.tag}>@{this.props.tag}</p>
          <p className={styles.location}>{this.props.location}l</p>
        </div>
      
        <ul className={styles.stats}>
        <li className={styles.firstLi}>
            <span className={styles.label}>Followers </span>
            <span className={styles.quantity}>{this.props.stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views </span>
            <span className={styles.quantity}>{this.props.stats.views}</span>
          </li>
          <li className={styles.lastLi}>
            <span className={styles.label}>Likes </span>
            <span className={styles.quantity}>{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>;
    }
}
 
export default Profile;