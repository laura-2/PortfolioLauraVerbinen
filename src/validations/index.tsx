import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const ValidationSchema = yup.object({
    name: yup.string().required('This field is mandatory!'),
    email: yup.string().email('Please enter a valid email.').required('This field is mandatory!'),
    message: yup.string().required('This field is mandatory!'),
})

export const WriteValid = yupResolver(ValidationSchema);