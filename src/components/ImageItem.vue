<template>
  <div class="post">
    <div>
      <img :src=image.reference alt="">
    </div>
    <div>
      <button class="btn" v-if="!this.$store.state.inSaves" @click="saveImage(image)">Add to favorites</button>
      <button class="btn" v-else @click="deleteFromSaves(image)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageRow",
  props:{
    image:{
      type: Object,
      required: true
    }
  },
  methods:{
    saveImage(image){
      this.$http.get('http://localhost:8080/memes/' + this.$store.state.userId + '/' + image.id)
          .then(res => console.log(res.status));
    },
    deleteFromSaves(image){
      //todo отправлять delete запрос
      this.$http.delete('http://localhost:8080/fav/' + this.$store.state.userId + '/' + image.id)
          .then(res => console.log(res.status));
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px solid darkslategrey;
  margin-top: 15px;
  background: aliceblue;
  align-items: center;
  justify-content: space-between;
}
.btn{
  padding: 10px 15px;
  background: floralwhite;
  color: black;
  border: 5px solid cornflowerblue;
}
</style>