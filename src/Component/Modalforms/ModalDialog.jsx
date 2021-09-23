import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles'
import Control from '../Control/Control'
import CloseIcon from '@mui/icons-material/Close';

//Estilo individual de la pagina de dialogo
const useStyles = makeStyles((theme) => ({
    dialogWraper:{
        padding: theme.spacing,
        position: 'absolute',
        width:'600px',
        '& .MuiFormControl-root':{
            width:'60%',
            margin: theme.spacing
        },
    },
    dialogTitle:{
        paddingRigth:'0px'
    },
    
}))

const ModalDialog = (props) => {
    const {title, children, openModal, setOpenModal} = props;
    const styles = useStyles();

    return (
        <Dialog open={openModal} sx={{ width: '100%' }} classes={{paper: styles.dialogWraper}}>
            <DialogTitle className={styles.dialogTitle}>
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" component='div' style={{flexGrow: 1}}>
                        {title}
                    
                    </Typography>
                    
                    <Control.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenModal(false)}}>
                        <CloseIcon/>
                    </Control.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>
    )
}

export default ModalDialog
