import { connect } from 'react-redux';
import AddCode from '../../components/AddCode';
import { changeValue, addDbCode } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  codes: state.MenuTitreCode.codes,
  id: state.MenuTitreCode.id,
  skill: state.leftMenu.skill,
  currentValue: state.MenuTitreCode[ownProps.name]
});

/* const mapDispatchToProps = {} */
const mapDispatchToProps = (dispatch, ownProps) => ({
   changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
  addDbCode: (titre, description, code, skill_id) => {
    dispatch(addDbCode(titre, description, code, skill_id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCode)