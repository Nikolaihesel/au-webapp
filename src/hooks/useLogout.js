import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext} from './useAuthContext'

export const useLogout = () => {
    const [isCancelled, setIsCancelelled] = useState(false);
const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
      setError(null)
      setIsPending(true)

      //sign user out 
      try {
        await projectAuth.signOut() 
        
        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        //update started
        if(!isCancelled) {
     setIsPending(false)
        setError(null)
        }
   
      }
      catch(err) {
              if(!isCancelled) {
          console.log(err)
          setError(err.message)
          setIsPending(false)
          }
      }
  }

  useEffect(() => {
    return () => setIsCancelelled(true);
  },[])
  return {logout, error, isPending}

}