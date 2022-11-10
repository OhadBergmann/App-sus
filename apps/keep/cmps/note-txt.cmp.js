export default {
	name: 'noteTxt',
	props: ['info'],
	template: `
          <section class="note-txt">
			  <h4>{{title}}</h4>
              <p>{{txt}}</p>
          </section>
          `,
	data() {
		return {
			title: this.info.title,
			txt: this.info.txt,
		}
	},
	methods: {},
	computed: {},
}
