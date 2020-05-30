import { connect } from 'react-redux';
import Login from './Login';
import { fetchAds, fetchLogin } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = {
  fetchAds,
  fetchLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
