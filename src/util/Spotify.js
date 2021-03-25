let accessToken;

const Spotify ={
    get accessToken(){
        if(accessToken){
            return accessToken;
        }
    }
}

export default Spotify;