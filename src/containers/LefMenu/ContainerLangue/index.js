import { connect } from 'react-redux';
import ContainerLangue from '../../../components/LeftMenu/ContainerLangue';
import { saveSkill } from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
  AllLanguage: state.leftMenu.skill,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveSkill: (id,name,image,color) => {
    dispatch(saveSkill(id,name,image,color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLangue);