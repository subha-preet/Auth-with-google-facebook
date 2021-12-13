function fbSDKLoaded() {
    // ready to use fb object
    FB.getLoginStatus(function(response) {
        if (response.status == 'not_authorized') {
            FB.login(response => {
                console.log(response);
            })
        }
    });
}