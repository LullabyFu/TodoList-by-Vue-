<template>
  <div class="game">
		<weather></weather>
  </div>
</template>

<script>
import weather from '@/components/Weather.vue'

export default {
	name: 'game',
  components: {
		weather
	}
}
</script>
