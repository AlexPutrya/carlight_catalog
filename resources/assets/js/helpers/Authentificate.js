export const auth = {

    isAuthentificated : false,
    authentificate(token){
        localStorage.setItem('token', token);
        this.isAuthentificated = true;
        console.log(this.isAuthentificated);
    },
    signout(){
        localStorage.setItem('token', '');
        this.isAuthentificated = false;
    }
}