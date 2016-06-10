<template>
	<div id="hostel-rooms">
		<hostel-room v-for="room in rooms" :room="room"></hostel-room>
	</div>
</template>

<script>

import hostelRoom from './hostel-room';
export default {
  components:{hostelRoom},
  props: ['rooms']
};
</script>

<style lang="sass">



</style>