<template>
  <div>
    <label>LOGIN</label>
    <input :value="username" @input="loginValue" class="input" type="text" placeholder="Username" >
    <label>PASSWORD</label>
    <input :value="password" @input="passValue" class="input" type="password" placeholder="password">
    <button @click="createUser">sign up</button>
    <button @click="enter">SIGN IN</button>
  </div>
</template>

<script>

export default {
  name: "LoginFrom",
  data(){
    return {
        username: '',
        password: '',
        user: Object
    }

  },

  methods:{
    enter(){
      if(this.username !== '' && this.password !== '') {
        this.$http.post('http://localhost:8080/user/enter', {
          username: this.username,
          password: this.password,
        }).then(res => res.json().then(user => {
          this.$store.commit('setUser', user);
          localStorage.id = user.id;
          localStorage.username = user.username;
        }))

      }
    },
    createUser(){
      if(this.username !== '' && this.password !== '') {
        this.$http.post('http://localhost:8080/user/newuser', {
          username: this.username,
          password: this.password,
        }).then(res => console.log(res.status))
      }
    },
    loginValue(event){
      this.username = event.target.value;
    },
    passValue(event){
      this.password = event.target.value;
    }
  }
}
</script>

<style scoped>

</style>