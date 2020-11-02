import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Nagłówek</h3>
      </div>
    );
  }
}

export default Column;
