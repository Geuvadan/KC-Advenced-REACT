import { connect } from 'react-redux';

import Filters from './Filters';

import { setFilter } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    queryFilter: state.queryFilter,
  };
}

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
