import React, { useState } from 'react'
import { Tooltip, Fab, Modal, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: '10px',
        right: '10px'
    },
    container: {
        width: '500px',
        height: '500px',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto'
    },
    item: {
        marginBottom: theme.spacing(2)
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Add() {
    const classes = useStyle();
    const [open, setopen] = useState(false);
    const [openAlert, setAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };
    const handleClick = () => {
        setAlert(true);
    };
    return (
        <>
            <Tooltip title='AddPost' aria-label='add' onClick={() => setopen(true)}>
                <Fab color='secondary' className={classes.fab}>
                    <AddCircle />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form autoComplete='off'>
                        <div className={classes.item}>
                            <TextField placeholder='عنوان پست' style={{ width: '100%', marginBottom: '15px' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                style={{ width: '100%' }}
                                id="outlined-multiline-static"
                                label="محتوا"
                                multiline
                                rows={4}
                                defaultValue="محتوای پست خود را بنویسید"
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label='چه کسانی پست شمارا ببینند؟' style={{ width: '200px' }}>
                                <MenuItem value='public'>همه کاربران</MenuItem>
                                <MenuItem value='private'>هیچکس</MenuItem>
                                <MenuItem value='friends'>دوستان</MenuItem>
                            </TextField>
                        </div>
                        <div>
                            <FormLabel component="legend">دسترسی کامنت گذاری؟</FormLabel>
                            <RadioGroup >
                                <FormControlLabel value="همه کاربران" control={<Radio size='small' />} label="همه کاربران" />
                                <FormControlLabel value="دوستان" control={<Radio size='small' />} label="دوستان" />
                                <FormControlLabel value="هیچکس" control={<Radio size='small' />} label="هیچکس" />

                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant='outlined' color='primary' style={{ marginLeft: '10px' }} onClick={handleClick}>ارسال</Button>
                            <Button variant='outlined' color='secondary' onClick={() => setopen(false)}>انصراف</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <Alert onClose={handleClose} severity="success">
                    پست باموفقیت ارسال شد
                </Alert>
            </Snackbar>
        </>
    )
}

export default Add
