import { increaseCounter, decreaseCounter } from './action/actions';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';

function App(props) {

  console.log(props)

  const newCount = useSelector((state) => {
    return state.counter.count
  })

  const fetchAllUser = async () => {
    let res = await axios.get('http://localhost:8080/users/all')
    console.log('>>>>', res)
    const data = res && res.data ? res.data : []
    console.log(data)
  }

  useEffect(() => {
    fetchAllUser()
  }, [])

  const dispatch = useDispatch()
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and Hoi Dan IT!</h1>
    //     <div>Count: {newCount}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home></Home>
  );
}

export default App



// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
