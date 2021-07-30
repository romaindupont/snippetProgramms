import { connect } from 'react-redux';
import AddPopup from '../../../components/LeftMenu/AddPopup';
import { addDbSkill } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  currentValue: state.leftMenu[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addDbSkill: (name,image,color) => {
    dispatch(addDbSkill(name,image,color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPopup);