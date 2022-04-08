import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'



const Counter = () => {
  const counter = useSelector(state => state)
  
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch({type: 'Increase'})
  }

  const decrementHandler = () => {
    dispatch({type: 'Decrease'})
  }

  const toggleCounterHandler = () => {};

  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>

      <button onClick = {incrementHandler}>Increase</button>
      <button onClick = {decrementHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;