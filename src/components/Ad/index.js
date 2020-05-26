import { connect } from 'react-redux';

import Ad from './Ad';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads,
  };
}

export default connect(mapStateToProps)(Ad);
