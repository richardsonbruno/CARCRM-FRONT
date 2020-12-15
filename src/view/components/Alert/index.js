import { changeAlert } from '../../../store/actions/alert.action'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Typography } from '@material-ui/core'
import { MdError, MdCheckCircle } from 'react-icons/md'

function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alertReducer)

  if (alert.open) {
    setTimeout(() => dispatch(changeAlert({ open: false })), alert.time);
  }

  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className='d-flex flex-column justify-content-center align-items-center h-100'
      onDurationChange={alert.time}
    >
      <div className='bg-white rounded-3 d-flex align-items-center outline-none p-4'>
        {alert.class === 'success' ? 
          <MdCheckCircle style={{ fontSize: '2.5rem' }} className='me-3 text-success' /> : 
          <MdError style={{ fontSize: '2.5rem' }} className='me-3 text-danger' />}

        <Typography variant='subtitle2' className='font-weight-bold'>
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
}

export default Alert;