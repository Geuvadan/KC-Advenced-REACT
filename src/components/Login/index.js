import { connect } from 'react-redux';
import Login from './Login';
import { fetchAds, setLogin, setUsername } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = {
  fetchAds,
  setLogin,
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
