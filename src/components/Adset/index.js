import { connect } from 'react-redux';
import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads,
  };
}

export default connect(mapStateToProps)(Adset);
