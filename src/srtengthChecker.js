import React from 'react';
import { usePasswordStrength } from './usePasswordStrength';


const PasswordStrengthChecker =()=> { 

    const {password, setPassword, passwordStrength} = usePasswordStrength ();


    const getPasswordStrengthColor = (index) => {

        
        switch (passwordStrength) {
            case 'empty':
                return 'gray';
            case 'weak':
                    return 'red';  
            case 'easy' :
                    return index <1 ? 'red':'gray';
    
            case 'medium' :
                    return index <2 ? 'yellow':'gray';

            case 'strong' :
                        return 'green';
            
            default:
                return 'gray';
        }

    };


    return (
    <div>
        <label> password:
            <input 
            type ="password" 
            value ={password} 
            onChange={(e)=> setPassword (e.target.value)}/>

        </label>

        <strong>   password strength: </strong>
        <div style = {{ color: getPasswordStrengthColor(0) }}>Section 1 </div>
        <div style = {{ color: getPasswordStrengthColor(1) }}>Section 2 </div>
        <div style = {{ color: getPasswordStrengthColor(2) }}>Section 3 </div>
    </div>
);
};


export default PasswordStrengthChecker;