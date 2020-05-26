import { connect } from 'react-redux';

import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    queryFilter: state.queryFilter,
    ads: state.ads,
  };
}

export default connect(mapStateToProps)(Adset);
