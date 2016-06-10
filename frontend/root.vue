<template>

	<brand-part>
		<a v-link="{name: 'home'}">Главная</a>
		<a v-link="{name: 'contacts'}">Контакты</a>
		<a v-link="{name: 'roomsIndex', params:{name: 'hi'}}">Привет</a>
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