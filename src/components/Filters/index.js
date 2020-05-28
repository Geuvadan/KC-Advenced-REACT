import { connect } from 'react-redux';

import Filters from './Filters';

import { setFilter, fetchAds } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    queryFilter: state.queryFilter,
    tags: state.tagsAvailable,
    ads: state.ads,
  };
}

const mapDispatchToProps = {
  setFilter,
  fetchAds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
