// import facebook SDK
import { useEffect } from 'react';
import { facebookLogin, loadFacebookSDK } from '../../../utils/facebookSDK';
import axios from 'axios';


export const FacebookButton = () => {
    useEffect(() => {
        loadFacebookSDK();
    }, []);

    const sendToken = async (token) => {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/facebook`, {
            accessToken: token
        }).then(response => {
            console.log('Token sent successfully:', response.data);
        }).catch(error => {
            console.error('Error sending token:', error);
        });
    }

    const handleClick = () => {
        facebookLogin()
            .then(response => {
                sendToken(response.authResponse.accessToken);
            })
            .catch(error => {
                console.error('Facebook login failed:', error);
            });
    }

    return (
        <div>
            <button onClick={handleClick}>Login with Facebook</button>
        </div>
    )
}
