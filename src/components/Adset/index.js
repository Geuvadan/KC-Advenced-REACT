import { connect } from 'react-redux';
import { getAds, getAdsSuccess, getUsername } from '../../store/selectors';
import Adset from './Adset';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
    adsSuccess: getAdsSuccess(state),
    username: getUsername(state),
  };
}

export default connect(mapStateToProps)(Adset);
