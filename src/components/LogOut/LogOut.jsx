import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

 
const LogOut=()=>{
    const dispatch=useDispatch();
    const handleSubmit = () => {
    
 
        dispatch(logOut());
        
      };
    
    return <>
    <button onClick={handleSubmit}>Log Out</button>
    
   
    
    </>
}
export default LogOut;