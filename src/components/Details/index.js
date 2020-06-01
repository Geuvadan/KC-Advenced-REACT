import { connect } from 'react-redux';
import { getAdDetail } from '../../store/selectors';

import Details from './Details';

function mapStateToProps(state, ownProps) {
  return {
    ad: getAdDetail(state, ownProps),
  };
}

export default connect(mapStateToProps)(Details);
