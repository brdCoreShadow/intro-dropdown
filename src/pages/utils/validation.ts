import * as Yup from "yup"

export const validationAuth = Yup.object().shape({
    user:Yup.string().min(2, "Too short")
    .required("Can't be the blank field"),
    pasword:Yup.string().min(6, "Too short").required("Can't be the blank field")
})
    
