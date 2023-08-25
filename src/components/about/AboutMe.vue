<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					bio:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/zksync-logo-circle.svg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				zkSync Era is a Layer-2 protocol that scales Ethereum with cutting-edge ZK tech. It aims to fully preserve Ethereum's 
				foundational values of freedom, self-sovereignty, and decentralization at scale.
			</p>

			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				To meet web3's exponential demand, blockchains need to be able to scale like the Internet. This means being able to 
				process an unlimited number of transactions without a marginal impact on security or cost. zkSync Era is designed to 
				achieve this property, called hyperscalability.
			</p>

			<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				Links:
				<ul>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500" 
							href="https://zksync.io/"
						>
							Official website
						</a>
					</li>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500" 
							href="https://era.zksync.io/docs/reference/concepts/zkSync.html"
						>
							Documentation
						</a>
					</li>

					<li>
						<a 
							target="_blank" 
							class="text-ternary-dark dark:text-ternary-light font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500" 
							href="https://explorer.zksync.io/"
						>
							Block explorer
						</a>
					</li>
					
				</ul>
			</p>
		</div>
	</div>
</template>

<style scoped>
ul {
	padding-left: 20px;
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #fff; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>