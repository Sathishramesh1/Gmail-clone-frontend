import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MailForm from './MailForm';
import { Box, ButtonGroup, NativeSelect, Select } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    justifyContent:'space-between'
  },
}));

export default function CustomizedDialogs(props) {

const handlex=(event)=>{
  event.stopPropagation()
   props.handleClose();
}  


  return (
    <div>
      
      <BootstrapDialog
        onClose={handlex}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2,background:'#d4e0f1' }} id="customized-dialog-title">
          New Message
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handlex}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <MailForm/>
          <Typography gutterBottom>
          
              </Typography>
          <Typography gutterBottom>
           
          </Typography>
        </DialogContent>
        <DialogActions>
          
           <ButtonWrap>
            <ButtonGroup>
          <Button autoFocus onClick={handlex}  variant="contained" color="primary">
            Send
    
            
          </Button>
          <Button size='small'>
            <ExpandMoreIcon/>
          </Button>
          </ButtonGroup>
          
         
          
          </ButtonWrap>
          
          <Button>
            <DeleteForeverIcon/>
          </Button>
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const ButtonWrap=styled(Box)({
  display:'flex',
  alignItems:'center',
  
 
  "&>Button:first-child":{
    marginLeft:10,
    borderRadius:18
  }

});

const ScheduleButton=styled(NativeSelect)({
  width:'10',
  height:'min-content',

  "& > *":{
    minWidth:10
  }

})