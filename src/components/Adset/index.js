import { connect } from 'react-redux';
import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads.results,
    success: state.ads.success,
    username: state.login.username,
  };
}

export default connect(mapStateToProps)(Adset);
