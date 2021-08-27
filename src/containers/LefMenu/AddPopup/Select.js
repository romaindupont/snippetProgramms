import { connect } from 'react-redux';
import Select from '../../../components/LeftMenu/AddPopup/Select';
import { changeValue } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  highlight: state.MenuTitreCode.highlight,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
   dispatch(changeValue(newValue, ownProps.name));
 }
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);