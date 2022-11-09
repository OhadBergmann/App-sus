export default {
	template: `
		<section class="search-bar-container">
            <section class="search-bar flex">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" class="search-input" @input="setFilter" v-model="filterBy.searchWord" placeholder="Search">
                <div class="note-type-filter">
                    <ul class="note-types clean-list flex">
                        <li :style="isNote" class="fa-solid fa-comment" @click="changeNoteFilter('noteTxt')"></li>
                        <li :style="isList" class="fa-solid fa-list" @click="changeNoteFilter('noteTodos')"></li>
                        <li :style="isImg" class="fa-solid fa-image" @click="changeNoteFilter('noteImg')"></li>
                        <li :style="isVideo" class="fa-brands fa-youtube" @click="changeNoteFilter('noteVideo')"></li>
                    </ul>
                </div>
            </section>
		</section>
    `,
	data() {
		return {
			filterBy: {
				searchWord: '',
				noteType: null,
			},
		}
	},
	components: {},
	methods: {
		changeNoteFilter(noteType) {
			if (this.filterBy.noteType !== noteType)
				this.filterBy.noteType = noteType
			else this.filterBy.noteType = null
			this.setFilter()
		},
		setFilter() {
			this.$emit('filtered', { ...this.filterBy })
		},
	},
	computed: {
		isNote() {
			return {
				color: this.filterBy.noteType === 'noteTxt' ? '#2a9d8f' : 'black',
			}
		},
		isList() {
			return {
				color: this.filterBy.noteType === 'noteTodos' ? '#e9c46a' : 'black',
			}
		},
		isImg() {
			return {
				color: this.filterBy.noteType === 'noteImg' ? '#118ab2' : 'black',
			}
		},
		isVideo() {
			return {
				color: this.filterBy.noteType === 'noteVideo' ? '#d93025' : 'black',
			}
		},
	},
	created() {},
}
