let config = {
    state:{
        token: null
    },
    getters:{
        iflogin(state){
            return !!state.token
        }
    }
}

export default config