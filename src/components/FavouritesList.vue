<template>
  <div>
    <div>
      <ImageItem v-for="image in this.saves" :image="image" v-bind:key="image.id" />

    </div>
    <div ref="obser" class="observer"></div>
  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";

export default {
  name: "FavouritesList",
  components:{ImageItem},
  data(){
    return{
      saves:[],
      pageCounter : 0,
    }
  },
  mounted() {
    //this.fetchImages();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) =>{
      if(entries[0].isIntersecting){
        this.loadMoreSaves();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.obser);
  },
  methods:{
    fetchImages() {
      let url = 'http://localhost:8080/fav/' + this.$store.state.userId + '/';

      this.$http.get(url + this.pageCounter)
          .then(res => {
            res.json().then(data => data.forEach(image => this.saves.push(image)))
          });
    },
    loadMoreSaves(){
      this.fetchImages();
      this.pageCounter += 1;
    }
  }
}
</script>

<style scoped>

</style>