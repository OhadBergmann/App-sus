import editNoteBox from './edit-note-box.cmp.js'

export default {
	name: 'noteBar',

	template: `
	<section> 
		<div v-if="!isEditOrAdd" class="add-note-bar flex space-between" @click="changeNoteType('noteTxt')">	
			<h1>take a note...</h1>
	</div>
	</section>
	<edit-note-box v-if="isEditOrAdd" @changeNoteType="changeNoteType" :noteToEdit="this.noteToEdit" :noteType="this.noteType" @saveNote="saveNote" @closeEditBox="closeEditBox"></edit-note-box>

    `,
	components: { editNoteBox },
	data() {
		return {
			noteType: null,
		}
	},
	methods: {
		saveNote() {
			
		},

		closeEditBox() {
			
		},
		changeNoteType() {
			
		}
	},
	computed: {
		isEditOrAdd() {
			
		},
	},

}
