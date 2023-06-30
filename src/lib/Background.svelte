<script>
	import noise from '$lib/assets/noise.svg';
	import blobs from '$lib/assets/blobs.svg';
</script>

<div
	class="fixed -z-20 h-[calc(100dvh)] w-screen"
>
	<svg
		class="-z-20 absolute w-[850px] left-1/2 -translate-x-[52%] -bottom-24 md:left-2/3 md:w-[950px] md:-bottom-32 blur-2xl"
		viewBox="0 0 1024 952"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M493.014 175.161C613.876 189.462 733.204 263.141 748.996 383.816C764.782 504.446 663.624 595.76 555.304 651.145C433.139 713.609 274.338 775.837 183.622 672.897C96.7964 574.371 200.419 438.643 269.748 327.11C322.29 242.583 394.177 163.467 493.014 175.161Z"
				fill="url(#paint0_linear_268_2)"
			/>
		</g>
		<g>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M560.264 290.003C681.533 290.526 785.57 370.234 825.534 484.73C868.561 608.004 857.766 758.463 748.973 830.657C648.761 897.158 530.197 816.885 434.222 744.403C345.965 677.75 258.288 588.982 287.849 482.408C320.701 363.973 437.358 289.472 560.264 290.003Z"
				fill="url(#paint1_linear_268_2)"
			/>
		</g>
		<g>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M440.127 505.552C375.937 429.055 430.311 319.894 488.775 238.824C536.241 173.004 613.475 137.6 692.587 155.473C781.788 175.624 869.487 234.266 873.077 325.643C876.544 413.905 787.647 463.824 706.034 497.737C615.478 535.367 503.105 580.605 440.127 505.552Z"
				fill="url(#paint2_linear_268_2)"
			/>
		</g>
		<defs>
			<linearGradient
				id="paint0_linear_268_2"
				x1="743.719"
				y1="330.106"
				x2="230.799"
				y2="777.366"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#CC607A" stop-opacity="0.59" />
				<stop offset="1" stop-color="#FFC56F" stop-opacity="0.95" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_268_2"
				x1="346.105"
				y1="349.949"
				x2="827.105"
				y2="813.949"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#CE0F3D" stop-opacity="0.83" />
				<stop offset="1" stop-color="#A472BB" stop-opacity="0.62" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_268_2"
				x1="425.934"
				y1="469.791"
				x2="873.792"
				y2="274.248"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#EC1E1E" stop-opacity="0.44" />
				<stop offset="0.0001" stop-color="#EC1E1E" stop-opacity="0.44" />
				<stop offset="1" stop-color="#2A87F4" />
			</linearGradient>
		</defs>
	</svg>
</div>

<!-- <figure data-img>
	<img class="fixed -z-10 h-[calc(100dvh)] w-screen" src={noise} alt="Background noise" />
</figure> -->
<div class="bg fixed -z-10 h-[calc(100dvh)] w-screen" />

<style>
	.bg {
		background-image: url("$lib/assets/noise.svg");
		background-repeat: repeat;
	}
</style>