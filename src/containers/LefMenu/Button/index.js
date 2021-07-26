import { connect } from 'react-redux';
import Button from '../../../components/LeftMenu/Button';
import { saveId } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  id: state.leftMenu.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveId: (id) => {
    dispatch(saveId(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button)