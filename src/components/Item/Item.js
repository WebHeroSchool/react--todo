import React from 'react';
import styles from './Item.module.css'
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends React.Component {
componentDidMount() {
  console.log('componentDidMount');
}

componentDidUpdate() {
  console.log('componentDidUpdate');
}

componentWillUnmount() {
  console.log('componentWillUnmount');
}

  render() {
    const {todoItems, isDone, onClickDone, id, onClickDelete} = this.props;

    return (
      <div className={styles.wrapper}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} onClick={() => onClickDone(id)}/>
          <span className={
            classnames({
              [styles.fake]: true,
              [styles.fakeDone]: isDone
            })
          }></span>
          <div className={styles.text}>
            <span className={
              classnames({
                [styles.item]: true,
                [styles.done]: isDone
              })
            }>
              {todoItems}
            </span>
          </div>
        </label>
        <div className={styles.trash} onClick={() => onClickDelete(id)}></div>
    </div>);
  }
}

Item.propTypes = {
  todoItems: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default Item;
