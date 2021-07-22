import { connect } from 'react-redux';
import MenuTitreCode from '../../components/MenuTitreCode';

const mapStateToProps = (state, ownProps) => ({
  codes: state.MenuTitreCode.codes,
  id: state.leftMenu.id
});
const mapDispatchToProps = {}
/* const mapDispatchToProps = (dispatch, ownProps) => ({
  addSkill: (id,name,image,color) => {
    dispatch(addSkill(id,name,image,color));
  },
  saveSkill: (id,name,image,color) => {
    dispatch(saveSkill(id,name,image,color));
  },
  modifySkill: (id,name,image,color) => {
    dispatch(modifySkill(id,name,image,color));
  }
}); */

export default connect(mapStateToProps, mapDispatchToProps)(MenuTitreCode)