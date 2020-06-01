import { connect } from 'react-redux';
import Login from './Login';
import { fetchAds, fetchLogin, setUsername } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = {
  fetchAds,
  fetchLogin,
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
