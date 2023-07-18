import  {useState, useEffect} from 'react';

export const usePasswordStrength = () => {
    const [password, setPassword] = useState ('');
    const [passwordStrength, setPasswordStrength] = useState ('Empty');


useEffect ( () => {

    const calculatePasswordStrength = () => {
        const passwordLength = password.length;

        if (passwordLength === 0 ){
            return 'empty';
        } else if (passwordLength < 8) {
            return 'weak';
        }  else if (
            /[a-zA-Z]/.test (password) &&
            /[0-9]/.test(password)
           ){ 
                return 'medium';
        } else if (
            /[a-zA-Z]/.test (password) &&
            /[0-9]/.test (password) &&
            /[^a-zA-Z0-9]/.test (password)
        ){
            return 'strong';
        }else {
            return 'easy';
        }
    };

    setPasswordStrength (calculatePasswordStrength());

}, [password]);


    return  {password, setPassword, passwordStrength};

};
 
 
