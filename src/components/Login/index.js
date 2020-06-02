import { connect } from 'react-redux';
import Login from './Login';
import { fetchAds, setLogin } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = {
  fetchAds,
  setLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
