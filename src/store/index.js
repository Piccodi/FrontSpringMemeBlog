import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: () => ({
        userId : null,
        username: '',
        inSaves: null

    }),
    mutations: {
       setUser(state, user){
           state.userId = user.id;
           state.username = user.username;
       },
       setPosition(state, check){
           state.inSaves = check
       },
       addImage(state, image){
           state.images.push(image)
       }
    }
})