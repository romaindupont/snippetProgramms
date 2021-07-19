import { connect } from 'react-redux';
import AddPopup from '../../../components/LeftMenu/AddPopup';
import { addSkill } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.leftMenu[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSkill: (id,name,image,color) => {
    dispatch(addSkill(id,name,image,color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPopup);