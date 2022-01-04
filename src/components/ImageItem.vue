<template>
  <div>
    <div>
      <img :src=image.reference alt="">
    </div>
    <div>
      <button v-if="!this.$store.state.inSaves" @click="saveImage(image)">Add to favorites</button>
      <button v-else @click="deleteFromSaves(image)">Delete</button>
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

</style>