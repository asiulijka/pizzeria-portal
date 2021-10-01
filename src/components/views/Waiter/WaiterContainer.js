import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, updateInAPI, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTableStatus: tableId => dispatch(updateInAPI(tableId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);