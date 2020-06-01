import { connect } from 'react-redux';
import { getAds } from '../../store/selectors';

import Ad from './Ad';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
  };
}

export default connect(mapStateToProps)(Ad);
