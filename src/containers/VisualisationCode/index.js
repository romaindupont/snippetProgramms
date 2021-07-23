import { connect } from 'react-redux';
import VisualisationCode from '../../components/VisualisationCode';


const mapStateToProps = (state, ownProps) => ({
  codes: state.MenuTitreCode.codes,
  id: state.MenuTitreCode.id,
  skill: state.leftMenu.skill
});

const mapDispatchToProps = {}
/* const mapDispatchToProps = (dispatch, ownProps) => ({
  saveId: (id) => {
    dispatch(saveId(id));
  }
}); */

export default connect(mapStateToProps, mapDispatchToProps)(VisualisationCode)