<template>
  <div class="game">
		<cardlist></cardlist>
  </div>
</template>

<script>
import cardlist from '@/components/CardList.vue'
import { setTimeout } from 'timers';

export default {
	name: 'game',
  components: {
		cardlist
	}
}
</script>
