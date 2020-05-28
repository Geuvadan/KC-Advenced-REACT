import { connect } from 'react-redux';
import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads,
    userLoggedIn: state.userLoggedIn,
  };
}

export default connect(mapStateToProps)(Adset);
