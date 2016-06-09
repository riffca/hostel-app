<template>

	<brand-part>
		<a v-link="{name: 'contacts'}">Contacts</a>
		<a v-link="{name: 'home'}">Home</a>
		<a v-link="{name: 'rooms', params:{rooms: 'hi'}}">hi</a>
	</brand-part>
	<router-view></router-view>
</template>

<script>
import BrandPart from './view/brand-part';

export default {
	components: {BrandPart},
	replace: false,
  	data () {
    return {

    };
  }
};
</script>

<style lang="sass">
#root {

}
</style>