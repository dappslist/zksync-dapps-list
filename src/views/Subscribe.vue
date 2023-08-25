<template>
	<div>
		<!-- Subscribe -->
		<div class="container mx-auto">
			<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<!-- About profile image -->
				<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
					<img
						src="@/assets/images/zksoul-logo-circle.svg"
						class="rounded-xl w-96"
						alt=""
					/>
				</div>

				<!-- About details -->
				<div class="w-full sm:w-3/4 text-left">
					<h3 class="mb-4 text-ternary-dark dark:text-ternary-light text-3xl">Get a free domain</h3>

					<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						Get a free 5+ domain name on the zkSoul ID website: 

						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500" 
							href="https://id.zkchat.net/"
						>
							https://id.zkchat.net/
						</a>
					</p>

					<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						If you subscribe to our emailing list, you can get another free domain (of any length).
						<br />

						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500" 
							href="https://zcmp.eu/0QWG"
						>
							Subscribe here!
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Subscribe',

	data: () => {
		return {};
	},

	mounted() {
		feather.replace();
	},

	updated() {
		feather.replace();
	},
	
	methods: {},
};
</script>

<style scoped></style>
