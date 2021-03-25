let accessToken;

const Spotify ={
    get accessToken(){
        if(accessToken){
            return accessToken;
        }
        //check for access token match
        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    }
}

export default Spotify;