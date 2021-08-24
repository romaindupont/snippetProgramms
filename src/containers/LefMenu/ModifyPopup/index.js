import { connect } from 'react-redux';
import ModifyPopup from '../../../components/LeftMenu/ModifyPopup';
import { addSkill, saveSkill, modifyDbSkill, saveId } from '../../../actions';

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
  modifyDbSkill: (name,image,color,highlight_id) => {
    dispatch(modifyDbSkill(name,image,color,highlight_id));
  },
  saveId: (id) => {
    dispatch(saveId(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPopup);