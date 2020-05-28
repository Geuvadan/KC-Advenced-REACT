import { connect } from 'react-redux';
import Login from './Login';
import { setUsername, fetchAds } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    userLoggedIn: state.userLoggedIn,
  };
}

const mapDispatchToProps = {
  setUsername,
  fetchAds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
