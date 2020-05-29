import { connect } from 'react-redux';
import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads,
    username: state.username,
  };
}

export default connect(mapStateToProps)(Adset);
