import { connect } from 'react-redux';
import VisualisationCode from '../../components/VisualisationCode';
import { changeValue, changeCode } from '../../actions';

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
  changeCode: (id, titre, description, category, code, name, color) => {
    dispatch(changeCode(id, titre, description, category, code, name, color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisualisationCode)