<template>
	<div id="logo">
		<h1 class="logo-title">Logo</h1>
		<div class="logo-content">
			<slot>
			</slot>	
		</div>
	</div>
</template>

<script>
export default {

  name: 'component_name',

  data () {
    return {

    };
  }
};
</script>

<style lang="sass">
@import 'variables';

#logo {
	@include border();
	position: relative;
	max-width: 70%;
	margin: 0 auto;
	.logo-title{
		text-align: center;
	}
}
</style>