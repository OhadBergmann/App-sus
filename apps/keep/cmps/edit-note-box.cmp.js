export default {
	name: 'editNoteBox',
	template: `
        <section class="edit-note-box">
			<form @submit.prevent="onSaveNote">
				<input v-model="this.title" type="text" placeholder="Title" class="title-input" autofocus>
				<hr>
				<textarea v-model="this.noteInfo" :placeholder="noteTypePlaceholder" cols="30" rows="10" class="note-input" required></textarea>
				<div class="note-edit-btns flex space-between">
					<input type="button" @click="onDiscardNote" value="Discard">
					<input type="submit" value="Save">
				</div>
			</form>
			<div class="note-type-select">
				<ul class="note-types clean-list flex space-around">
					<li title="Text" :style="isNote" class="fa-solid fa-comment" @click="changeNoteType('noteTxt')"></li>
					<li title="List" :style="isList" class="fa-solid fa-list" @click="changeNoteType('noteTodos')"></li>
					<li title="Image" :style="isImg" class="fa-solid fa-image" @click="changeNoteType('noteImg')"></li>
					<li title="Youtube video" :style="isVideo" class="fa-brands fa-youtube" @click="changeNoteType('noteVideo')"></li>
				</ul>
            </div>
        </section>
    `,
	props: ['noteType', 'noteToEdit'],
	data() {
		return {
			title: null,
			id: null,
			isPinned: false,
			bgClr: 'white',
			noteInfo: null,
		}
	},
	methods: {
		changeNoteType(noteType) {
			this.$emit('changeNoteType', noteType)
		},
		onDiscardNote() {
			this.$emit('closeEditBox')
		},
	},
	computed: {
		isNote() {
			return {
				color:
					this.noteType === 'noteTxt' ||
					this.noteToEdit?.type === 'noteTxt'
						? '#2f934a'
						: 'black',
			}
		},
		isList() {
			return {
				color:
					this.noteType === 'noteTodos' ||
					this.noteToEdit?.type === 'noteTodos'
						? 'orange'
						: 'black',
			}
		},
		isImg() {
			return {
				color:
					this.noteType === 'noteImg' ||
					this.noteToEdit?.type === 'noteImg'
						? 'blue'
						: 'black',
			}
		},
		isVideo() {
			return {
				color:
					this.noteType === 'noteVideo' ||
					this.noteToEdit?.type === 'noteVideo'
						? '#d93025'
						: 'black',
			}
		},
	},
	created() {
		if (this.noteToEdit) {
			this.title = this.noteToEdit.info.title
			this.id = this.noteToEdit.id
			this.isPinned = this.noteToEdit.isPinned
			this.bgClr = this.noteToEdit.bgClr
			this.noteInfo =
				this.noteToEdit.info.txt ||
				this.noteToEdit.info.src ||
				this.noteToEdit.info.todos
					.map(todo => {
						return todo.task
					})
					.join(',')
		}
	},
}
