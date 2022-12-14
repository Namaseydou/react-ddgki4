import { connect } from 'react-redux';
import Counter from './Counter';

//Map Redux state to component props

function mapStateToProps(state) {
  return {
    countValue: state.count,
  };
}

//Action

let increaseAction = { type: 'increase' };
let decreaseAction = { type: 'decrease' };
//Map Redux actions to component props

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function () {
      return dispatch(increaseAction);
    },
    decreaseCount: function () {
      return dispatch(decreaseAction);
    },
  };
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connectedComponent;
