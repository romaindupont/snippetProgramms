import { connect } from 'react-redux';
import AddPopup from '../../../components/LeftMenu/AddPopup';
import { addDbSkill } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.leftMenu[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addDbSkill: (name,image,color,highlight_id) => {
    dispatch(addDbSkill(name,image,color,highlight_id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPopup);