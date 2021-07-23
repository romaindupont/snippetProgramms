import { connect } from 'react-redux';
import MenuTitreCode from '../../components/MenuTitreCode';
import { saveId } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  codes: state.MenuTitreCode.codes,
  id: state.leftMenu.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveId: (id) => {
    dispatch(saveId(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuTitreCode)