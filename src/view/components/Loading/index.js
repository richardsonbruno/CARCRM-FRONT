import { Typography, CircularProgress, Modal } from '@material-ui/core'
import { changeLoading } from '../../../store/actions/loading.action'
import { useSelector, useDispatch } from 'react-redux'

function Loading() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loadingReducer);

  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch(changeLoading({ open: false }))}
      className="d-flex justify-content-center align-items-center h-100">
      <div className="bg-white d-flex align-items-center rounded-3 p-3 outline-none">
        <CircularProgress size={20} />

        <Typography variant="subtitle1" className="ms-3">
          { loading.msg }
        </Typography>
      </div>
    </Modal>
  );
}

export default Loading;