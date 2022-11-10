export default {
	name: 'noteTxt',
	props: ['info'],
	template: `
          <section class="note-txt" >
			  <h4 contenteditable="true">{{title}}</h4>
              <p contenteditable="true">{{txt}}</p>
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
