import {connect} from 'react-redux';
import HomeComponent from '../../components/Home';
import {incrementAction, decrementAction} from './actions';

const mapStateToProps = state => {
  return {
    value: state.homeReducer.value,
  };
};

const mapDispatchToProps = {
  incrementAction,
  decrementAction,
};

const NewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default NewContainer;
