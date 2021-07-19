import { connect } from 'react-redux';
import Field from '../../../components/LeftMenu/AddPopup/Field';
import { changeValue } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.leftMenu[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);