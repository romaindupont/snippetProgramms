import { connect } from 'react-redux';
import App from '../../components/App';
import { fetchSkills, fetchCodes } from '../../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSkills: () => {
    dispatch(fetchSkills());
  },
  fetchCodes: () => {
    dispatch(fetchCodes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);