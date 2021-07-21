import { connect } from 'react-redux';
import ModifyPopup from '../../../components/LeftMenu/ModifyPopup';
import { addSkill, saveSkill, modifySkill } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.leftMenu[ownProps.name],
  AllLanguage: state.leftMenu.skill
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addSkill: (id,name,image,color) => {
    dispatch(addSkill(id,name,image,color));
  },
  saveSkill: (id,name,image,color) => {
    dispatch(saveSkill(id,name,image,color));
  },
  modifySkill: (id,name,image,color) => {
    dispatch(modifySkill(id,name,image,color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPopup);