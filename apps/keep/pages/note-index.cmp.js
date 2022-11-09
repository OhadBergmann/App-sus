import { keepService } from '../services/note.service.js'
import { eventBus } from '../../../services/event-bus.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import notePreview from '../cmps/note-preview.cmp.js'
import noteBar from '../cmps/note-bar.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
	template: `
		<section class="flex column align-center">
			<section class="keep-main-layout flex column align-center">
				<note-filter @filtered="setFilter"></note-filter>
				<note-bar @saveNote="saveNote" :noteToEdit="noteToEdit" @closeEditBox="closeEditBox"></note-bar>
				<ul class="notes-list-container clean-list">
					<li v-for="(note, idx) in notesForDisplay" :key="note.id">
						<note-preview :note="note" @colorNote="changeNoteClr" @removeNote="removeNote"  @editNote="editNote"></note-preview>
					</li>
				</ul>
			</section>
		</section>
    `,
	data() {
		return {
			notes: null,
			noteToEdit: null,
			filterBy: null,
		}
	},
	components: { notePreview, noteBar, noteFilter },
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy
		},
		closeEditBox() {
			this.noteToEdit = null
		},
		editNote(note) {
			this.noteToEdit = note
		},
		saveNote(note) {
			if (!note.id) {
				keepService.save(note).then(note => {
					this.notes.unshift(note)
					eventBus.emit('show-msg', {
						txt: 'Note added',
						type: 'success',
						// .then(book => {
						// 	this.book = book
						// 		showSuccessMsg(`Review removed`)
						// 	})
						// 	.catch(err =>{
						// 		console.log('OOPS', err)
						// 		showErrorMsg('Cannot remove review')
					})
				})
			} else {
				keepService.update(note).then(() => {
					this.notes = null
					keepService.query().then(notes => {
						this.notes = notes
						eventBus.emit('show-msg', {
							txt: 'Note updated',
							type: 'success',
							// .then(book => {
							// 	this.book = book
							// 		showSuccessMsg(`Review removed`)
							// 	})
							// 	.catch(err =>{
							// 		console.log('OOPS', err)
							// 		showErrorMsg('Cannot remove review')
						})
					})
				})
			}
		},
		removeNote(id) {
			keepService.remove(id).then(() => {
				const idx = this.notes.findIndex(note => note.id === id)
				this.notes.splice(idx, 1)
				eventBus.emit('show-msg', {
					txt: 'Note removed',
					type: 'success',
					// .then(book => {
					// 	this.book = book
					// 		showSuccessMsg(`Review removed`)
					// 	})
					// 	.catch(err =>{
					// 		console.log('OOPS', err)
					// 		showErrorMsg('Cannot remove review')
				})
			})
		},
// },
	},
	computed: {
		notesForDisplay() {
			let notes = this.notes
			if (this.filterBy?.noteType) {
				notes = notes.filter(note => note.type === this.filterBy.noteType)
			}

			if (this.filterBy?.searchWord) {
				const regex = new RegExp(this.filterBy.searchWord, 'i')
				notes = notes.filter(note => {
					if (regex.test(note.info.title)) return true
					if (note.info.txt && regex.test(note.info.txt)) return true
					if (note.info.todos) {
						return note.info.todos.some(todo => regex.test(todo.task))
					}
				})
			}
			return notes
		},
	},
	created() {
		keepService.query().then(notes => {
			const pinnedNotes = notes.filter(note => {
				if (note.isPinned) return note
				else return
			})
			const unpinnedNotes = notes.filter(note => {
				if (!note.isPinned) return note
				else return
			})
			let allNotes = []
			if (pinnedNotes.length) allNotes.push(...pinnedNotes)
			if (unpinnedNotes.length) allNotes.push(...unpinnedNotes)
			this.notes = allNotes
		})
	},

}
