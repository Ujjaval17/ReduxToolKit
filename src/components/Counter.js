import classes from './Counter.module.css';
import { counterActions } from '../store/index.js';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const shwcnter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  const incHandler = () => {
      dispatch(counterActions.increment());
  };

  const incrHandler = () => {
    dispatch(counterActions.increase(5));
};

  const decHandler = () => {
    dispatch(counterActions.decrement());
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
