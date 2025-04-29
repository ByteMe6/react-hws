import { Component } from "react";
import arr from "./Friends.json";
import styles from './Friends.module.css';


class Friends extends Component {
    state = {  } 
    render() { 
        return <div className={styles.friends}>
            {arr.map(({avatar, name, isOnline, id}) => {
                return (
                    <div key={id} className={styles.oneFriend}>
                        <img src={avatar} alt={name} className={styles.avatar} />
                        <span className={styles.name}>{name} </span>
                        <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
                            {isOnline ? '🟢' : '🔴'}
                        </span>
                    </div>
                );
            })}
        </div>;
    }
} 

export default Friends;