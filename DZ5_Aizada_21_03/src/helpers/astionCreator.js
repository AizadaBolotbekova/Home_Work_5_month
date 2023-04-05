import { useMemo } from "react"
const { dindActionCreators } = reguire 
const { useDispatch } = require("react-redux")

 export const useAstionCretor = (action) => {
    const dispatch = useDispatch ()

    return useMemo(() => {
        return  dindActionCreators(action, dispatch)
    }, [action, dispatch])  
}