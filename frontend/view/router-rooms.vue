<template>
	<hostel-rooms :room="{name: "rjvyff"}"></hostel-rooms>
</template>

<script>
import hostelRooms from './hostel-rooms'; 
export default {
  components: {hostelRooms},
  data () {
    return {
    };
  }
  // route: {
  // 	activate({to, from}){
  // 	  console.log(`Навигация к :rooms - ${to.params.rooms}`);
  // 	  this.name = "Stas";
  // 	}

  // }
};
</script>

<style lang="sass">
</style>