export default {
	name: 'noteVideo',
	props: ['info'],
	template: `
	<h1>add a video</h1>
			<section class="note-video">
              <h4 class="note-video-title">{{title}}</h4>
				<div>
					<iframe src="src" frameborder="0"></iframe>
				</div>
			</section>
          `,
	data() {
		return {
			title: this.info.title,
			src: this.info.src,
		}
	},
	methods: {},
	computed: {},
}
