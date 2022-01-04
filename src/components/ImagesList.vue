<template>
  <div>
    <div v-if="this.$store.state.userId">
      <ImageItem v-for="image in this.images" :image="image" v-bind:key="image.id" />
    </div>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
export default {
  name: "ImagesList",
  components:{ImageItem},
  data(){
    return{
      pageCounter : 0,
      images:[]
    }
  },

  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) =>{
      if(entries[0].isIntersecting){
        this.loadMoreImages();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  methods:{
    fetchImages(){
       let url = 'http://localhost:8080/memes/';

      this.$http.get(url + this.pageCounter)
        .then(res => {
          res.json().then(data => data.forEach(image => this.images.push(image)))
        });
    },
    loadMoreImages(){
      this.fetchImages();
      this.pageCounter += 1;
    }
  }

}
</script>

<style scoped>

</style>Y