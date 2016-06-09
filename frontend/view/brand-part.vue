<template>
	<div id="brand-part">
	    <logo>
	    	<h3>Хостел</h3>
	    </logo>
		<div class="brand-part-content">	
			<slot></slot>
		</div>
	</div>	
</template>

<script>
import logo from './logo';

export default {
  components: {logo},
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
	@import 'variables.scss';
	#brand-part {
		@include border();
	}	
</style>