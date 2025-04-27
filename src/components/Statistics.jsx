import React, { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
    generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } // бонус))

    render() {
        const { title, stats } = this.props;
        const mergedStats = stats.reduce((acc, {id, label, percentage}) => {
            const existing = acc.find(item => item.label === label);
            if (existing) {
                existing.percentage += percentage;
            } else {
                acc.push({id, label, percentage});
            }
            return acc;
        }, []);

        return (
            <section className="statistics">
                {title && <h2 className="title">{title}</h2>}
                <ul className="stat-list">
                    {mergedStats.map(({ id, label, percentage }) => (
                        <li key={id} className="item" style={{ backgroundColor: this.generateRandomColor() }}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default Statistics;