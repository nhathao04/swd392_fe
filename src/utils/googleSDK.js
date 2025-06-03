import { redirect } from "react-router-dom";

export function loadGoogleSDK() {
    return new Promise((resolve) => {
        if (window.gapi && window.gapi.auth2) {
            resolve(window.gapi);
            return;
        }
        window.onGoogleSDKLoad = function () {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                    scope: 'profile email',
                    prompt: 'select_account'
                }).then(() => {
                    resolve(window.gapi);
                });
            });
        };
        // Load the SDK script
        if (!document.getElementById('google-platform')) {
            const script = document.createElement('script');
            script.id = 'google-platform';
            script.src = 'https://apis.google.com/js/platform.js?onload=onGoogleSDKLoad';
            document.body.appendChild(script);
        }
    });
}

export function googleLogin() {
    return new Promise((resolve, reject) => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        if (!auth2) {
            reject(new Error('Google SDK not initialized'));
            return;
        }
        auth2.signIn({
            scope: 'profile email',
        }).then((user) => {
            console.log('Google login successful:', user);
            resolve(user);

        }).catch((error) => {
            reject(error);
        });
    });
}