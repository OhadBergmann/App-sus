import editNoteBox from './edit-note-box.cmp.js'

export default {
	name: 'noteBar',

	template: `
	<section> 
		<div v-if="!isEditOrAdd" class="add-note-bar" @click="changeNoteType('noteTxt')">	
		<p>Take a note...</p>
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
		saveNote(note) {
			this.$emit('saveNote', note)	
		},

		closeEditBox() {
			this.noteType = null
			this.$emit('closeEditBox')
		},
		changeNoteType(type) {
			this.noteType = type
		},
	},
	computed: {
		isEditOrAdd() {
			if (this.noteToEdit || this.noteType) return true
		},
	},

}
