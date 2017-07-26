<template>
	<div class="g-search">
		<img src="./img/list-search.png" alt="" />
		<span>抱歉，暂未查到您要的商品</span>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-search {
	position: relative;
	height: 579px;
	width: 1280px;
	margin: 0 auto;
	border-bottom: 1px solid gray;
}
.g-search>img {
	position: absolute;
	top: 180px;
	left: 50%;
	width: 100px;
	height: 100px;
	margin-left: -50px;
}
.g-search>span {
	display: inline-block;
	position: absolute;
	bottom: 192px;
	left: 50%;
	height: 50px;
	width: 460px;
	margin-left: -230px;
	font-size: 36px;
	line-height: 50px;
	color: #f08200;
}
</style>
