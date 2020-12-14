import { Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux';
import { changeNotify } from '../../../store/actions/notify.action'

const useStyles = makeStyles({
  success: {
    backgroundColor: green[500]
  },
  error: {
    backgroundColor: red[600]
  }
})

function Notify() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.notifyReducer);
  const classes = useStyles();

  return (
    <Snackbar
      autoHideDuration={selector.time}
      open={selector.open}
      anchorOrigin={{ 
        horizontal: selector.horizontal, 
        vertical: selector.vertical 
      }}
      onClose={() => dispatch(changeNotify({ open: false }))}>
        <SnackbarContent
          className={classes[selector.class] + ' d-flex justify-content-center'}
          message={
            <span className="d-flex align-items-center">{selector.msg}</span>
          } />
    </Snackbar>
  );
}

export default Notify;