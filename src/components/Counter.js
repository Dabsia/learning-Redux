import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {counterActions} from './reducer'


const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  
  
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch(counterActions.increment)
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement)
  }

  const incrementHandlerByNum = () => {
    dispatch(counterActions.IncreaseByNum(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter)
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div> 
      
      <div>

      <button onClick = {incrementHandler}>Increase</button>
      <button onClick = {incrementHandlerByNum}>Increase 10</button>
      <button onClick = {decrementHandler}>Decrease</button>
      </div>
      <button onClick = {toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;