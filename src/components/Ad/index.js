import { connect } from 'react-redux';

import Ad from './Ad';

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads.results,
  };
}

export default connect(mapStateToProps)(Ad);
