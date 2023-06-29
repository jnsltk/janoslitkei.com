<div class="ml-28 mr-16 flex h-screen flex-col pt-6">
	<div class="mb-auto mt-auto">
		<h2 class="font-display text-xl font-semibold">Contact me</h2>
		<p class="mb-8 text-sm">
			If you have any questions or would like to work together, please send me a message, I am
			always happy to help.
		</p>
		<form action="#" class="w-full max-w-2xl">
			<div class="-mx-3 mb-2 flex">
				<div class="w-full px-3">
					<label class="mb-2 block text-xs font-bold tracking-wide" for="grid-name"> Name </label>
					<input
						class="mb-3 block w-full rounded border border-light-bg-500 bg-light-bg-300/50 px-4 py-3 text-xs leading-tight shadow-md backdrop-blur-md placeholder:text-gray-600 focus:border-smoky-black focus:bg-light-bg-100/50 focus:outline-none focus:ring-smoky-black"
						id="grid-name"
						type="text"
						placeholder="Your Name..."
					/>
				</div>
				<div class="w-full px-3">
					<label class="mb-2 block text-xs font-bold tracking-wide" for="grid-email"> Email </label>
					<input
						class=" mb-3 block w-full rounded border border-light-bg-500 bg-light-bg-300/50 px-4 py-3 text-xs leading-tight shadow-md backdrop-blur-md placeholder:text-gray-600 focus:border-smoky-black focus:bg-light-bg-100/50 focus:outline-none focus:ring-smoky-black"
						id="grid-email"
						type="text"
						placeholder="Your Email adress..."
					/>
				</div>
			</div>
			<div class="w-full pb-5">
				<label class="mb-2 block text-xs font-bold tracking-wide" for="grid-message">
					Message
				</label>
				<textarea
					class="mb-3 block w-full resize-none rounded border border-light-bg-500 bg-light-bg-300/50 px-4 py-3 text-xs leading-tight shadow-md backdrop-blur-md placeholder:text-gray-600 focus:border-smoky-black focus:bg-light-bg-100/50 focus:outline-none focus:ring-smoky-black"
					name="Message"
					id="grid-message"
					cols="30"
					rows="15"
					placeholder="Type your message here..."
				/>
			</div>
			<button
				type="submit"
				class="focus:ring-primary-300 rounded-lg bg-gray-900 px-5 py-3 text-center text-sm font-medium text-gray-100 hover:bg-accent-orange focus:outline-none focus:ring-4"
				>Send message</button
			>
		</form>
	</div>
</div>
