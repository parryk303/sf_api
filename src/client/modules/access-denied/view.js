import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { globalStyles } from '@client/shared/constants';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { noop } from '@client/shared/constants';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import styles from './style';

const AccessDeniedView = ({ isOpen = false, redirectToLogin = noop }) => {
  return (
    <Dialog open={isOpen} onClose={redirectToLogin}>
      <DialogTitle
        sx={{
          ...globalStyles.text.align.right,
          ...styles.dialogTitle,
        }}
      >
        <IconButton onClick={redirectToLogin} sx={styles.closeIcon}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          ...globalStyles.flex.justify.center,
          ...globalStyles.flex.align.center,
          ...globalStyles.display.flex,
          ...styles.dialogContent,
        }}
      >
        <WarningRoundedIcon
          fontSize="large"
          color="error"
          sx={styles.infoBtn}
        />
        <Typography variant="h4" sx={styles.heading}>
          Access Denied
        </Typography>
        <Typography variant="body1">
          Please contact your RingCentral Account
        </Typography>
        <Typography variant="body1">Administrator for access.</Typography>
      </DialogContent>
      <DialogActions
        sx={{
          ...globalStyles.flex.justify.center,
          ...styles.actions,
        }}
      >
        <Button
          onClick={redirectToLogin}
          variant="contained"
          color="primary"
          sx={styles.actionButtons}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccessDeniedView;
