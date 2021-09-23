import React, {Fragment, useState} from 'react';
import {makeStyles} from '@mui/styles'

export function useForm(initialFValues, validateOnChange= false, validate){
    initialFValues.size=parseInt(initialFValues.size,10)
 
    
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e=>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
            validate({[name]:value})
    }

    const resetForm = ()=>{
        setValues(initialFValues)
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root':{
            width:'30%',
            margin: theme.spacing
        },
    }
}))

export const Form = (props) => {
    const styles = useStyles();

    const {children, ...others} = props
    return (
        <Fragment>
            <form className={styles.root} autoComplete="off" {...others}>
                {props.children}
            </form>
        </Fragment>
    )
};