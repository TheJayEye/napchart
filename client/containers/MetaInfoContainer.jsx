import { connect } from 'react-redux'
import MetaInfo from '../components/MetaInfo.jsx'

const mapStateToProps = (state) => {
  return {
    metaInfo: state.history.present.metaInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMetaInfoUpdate: (element) => {
      dispatch({
        type: 'EDIT_METAINFO',
        newMetaInfo: element
      })
    },
    onTitleChange: (e) => {
      dispatch({
        type: 'EDIT_TITLE',
        title: e.target.value
      })
    },
    onDescriptionChange: (e) => {
      dispatch({
        type: 'EDIT_DESCRIPTION',
        description: e.target.value
      })
    },
    onFocus: () => {
      dispatch({
        type: 'DESELECT'
      })
    }
  }
}

const MetaInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MetaInfo)

export default MetaInfoContainer
