import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {authActions} from '../store/auth'

const Header = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  

  const signOutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            {/*<a href='/'>My Products</a>*/}
             <p>My Products</p>
          </
          li>
          <li>
      {/* <a href='/'>My Sales</a> */}
            <p>My Sales</p>
          </li>
          <li>
            <button onClick = {signOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>} 
      
    </header>
  );
};

export default Header;