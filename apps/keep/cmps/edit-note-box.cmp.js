export default {
	name: 'editNoteBox',
	template: `
        <section class="edit-note-box hide">
			<form @submit.prevent="saveNote">
				<input v-model="this.title" type="text" placeholder="Title" class="title-input" autofocus>
				<textarea v-model="this.noteInfo" :placeholder="noteTypePlaceholder" cols="30" rows="10" class="note-input" required></textarea>
				<div class="flex space-between">
					<input class="note-edit-btns" type="button" @click="onDiscardNote" value="Close">
					<input class="note-edit-btns" type="submit" value="Save">
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
	props: ['noteType', 'noteEdit'],
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
		onSaveNote() {
			switch (this.noteType || this.noteToEdit.type) {
				case 'noteTxt':
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						bgClr: this.bgClr,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, txt: this.noteInfo },
					})
					break
				case 'noteTodos':
					let todos = this.noteInfo.split(',')
					todos = todos.map(todo => {
						return { task: todo, isDone: false }
					})
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						bgClr: this.bgClr,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, todos },
					})
					break
				case 'noteImg':
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						bgClr: this.bgClr,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, src: this.noteInfo },
					})
					break
				case 'noteVideo':
					if (!this.noteInfo.includes('watch?v=')) {
						console.log('Invalid Youtube link')
						break
					}
					let link = this.noteInfo
					link = link.replace('watch?v=', 'embed/')
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						bgClr: this.bgClr,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, src: link },
					})
					break
			}
			this.$emit('closeEditBox')
		},
	},
	computed: {
		isNote() {
			return {
				color:
					this.noteType === 'noteTxt' ||
					this.noteEdit?.type === 'noteTxt'? '#2f934a': 'black',
			}
		},
		isList() {
			return {
				color:
					this.noteType === 'noteTodos' ||
					this.noteEdit?.type === 'noteTodos'? '#ffbd00': 'black',
			}
		},
		isImg() {
			return {
				color:
					this.noteType === 'noteImg' ||
					this.noteEdit?.type === 'noteImg'? '#0077b6': 'black',
			}
		},
		isVideo() {
			return {
				color:
					this.noteType === 'noteVideo' ||
					this.noteEdit?.type === 'noteVideo'? '#d93025': 'black',
			}
		},
		noteTypePlaceholder() {
			switch (this.noteType) {
				case 'noteTxt':
					return 'Take a note'
				case 'noteTodos':
					return 'Type your tasks (separated by a ",")'
				case 'noteImg':
					return 'Enter image URL'
				case 'noteVideo':
					return 'Enter Youtube URL'
			}
		},
	},
	created() {
		if (this.noteEdit) {
			this.noteEdit = noteEdit
			this.title = this.noteEdit.info.title
			this.id = this.noteEdit.id
			this.isPinned = this.noteEdit.isPinned
			this.bgClr = this.noteEdit.bgClr
			this.noteInfo =
				this.noteEdit.info.txt ||
				this.noteEdit.info.src ||
				this.noteEdit.info.todos
					.map(todo => {
						return todo.task
					})
					.join(',')
		}
	},
}
