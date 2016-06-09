<template>
	<div id="hostel-rooms">
		<hostel-room v-for="room in rooms" :room="room"></hostel-room>
	</div>
</template>

<script>
export default {
  props: ['room']
};
</script>

<style lang="css" scoped>
</style>