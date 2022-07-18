import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const shwcnter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
      dispatch({type: 'toggle'});
  };

  const incHandler = () => {
      dispatch({type: 'increment'});
  };

  const incrHandler = () => {
    dispatch({type: 'increase', amount: 5});
};

  const decHandler = () => {
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {shwcnter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Inc</button>
        <button onClick={incrHandler}>Inc by 5</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
