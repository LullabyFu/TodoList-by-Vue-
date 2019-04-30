<template>
	<div>
		<button>
			<slot>Submit</slot>
		</button>
		<slot></slot>

		<header>
			<slot name="header"></slot>
		</header>
		<footer>
			<slot name="footer"></slot>
		</footer>

		<span>
			<slot :user="user" name="bind1">
				{{ user.lastname }}
			</slot>
		</span>
	</div>
</template>

<script>
export default {
	name: 'slotcopm',
	data() {
		return {
			user: {
				name: 'Alice',
				lastname: 'liang'
			}
		}
	}
}
</script>
