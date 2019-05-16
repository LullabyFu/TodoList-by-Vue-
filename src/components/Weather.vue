<template>
	<div class="weather">
		<p>{{ health }}</p>
		<p>{{ highest }}</p>
		<p>{{ lowest }}</p>
		<p>{{ todayWeather }}</p>
	</div>
</template>

<script>
export default {
	name: 'weather',
	data() {
		return {
			forecast: [],
			health: '',
			highest: '',
			lowest: '',
			type: '',
			rtTemp: ''
		}
	},

	computed: {
		todayWeather: function() {
			return this.forecast[0]
		},

		futureFocast: function() {
			return this.forecast.splice(0, 1)
		}
	},

	created() {
		this.axios.get('http://wthrcdn.etouch.cn/weather_mini?city=深圳')
		.then((response) => {
			this.forecast = response.data.data.forecast
			this.health = response.data.data.ganmao
			this.rtTemp = response.data.data.wendu

			let pattern = /\-?\d{1,2}℃/
			let sub = pattern.exec(this.forecast[0].high)
			this.highest = sub[0]
		
			sub = pattern.exec(this.forecast[0].low)
			this.lowest = sub[0]

		}).catch((error) => {
			console.log(error)
		})
	}
}
</script>

<style scoped>

</style>



