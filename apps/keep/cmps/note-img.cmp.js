export default {
	name: 'noteImg',
	props: ['info'],
	template: `
  			<section class="note-img">
              <h4 class="note-img-title">{{title}}</h4>
			  <div>
				  <img v-bind:src="src" :alt="this.title">
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
