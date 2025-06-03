export function loadFacebookSDK() {
    const appId = import.meta.env.VITE_FACEBOOK_APP_ID;
    return new Promise((resolve) => {
        if (window.FB) {
            resolve(window.FB);
            return;
        }
        window.fbAsyncInit = function () {
            window.FB.init({
                appId,
                cookie: true,
                xfbml: true,
                version: 'v23.0',
            });
            resolve(window.FB);
        };
        // Load the SDK script
        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            document.body.appendChild(script);
        }
    });
}

export function facebookLogin() {
    return new Promise((resolve, reject) => {
        const permissions = 'public_profile,email,catalog_management';
        window.FB.login(
            (response) => {
                if (response.authResponse) {
                    resolve(response);
                } else {
                    reject(new Error('User cancelled login or did not fully authorize.'));
                }
            },
            { scope: permissions }
        );
    });
}