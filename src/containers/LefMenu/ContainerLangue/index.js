import { connect } from 'react-redux';
import ContainerLangue from '../../../components/LeftMenu/ContainerLangue';

const mapStateToProps = (state, ownProps) => ({
  AllLanguage: state.leftMenu.skill,
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLangue);