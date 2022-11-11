import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js';
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js';
import mailTable from '../apps/mail/cmps/mail-table.cmp.js';
import composeMail from '../apps/mail/cmps/mail-compose.cmp.js';

export default {
    template:`
    <main class="mail-layout">
        <mail-filter />
        <section class="table-container">
            <mail-nav @composeNewMail="startNewDraft"/>
            <mail-table/>
        </section>
        <compose-mail class="mail-composer" :class="{conceal :!isComposeCmp}" @saveToDraft="saveDraft"/>
    </main>
    `, data(){
        return {
            isComposeCmp: false
        }
    },
    methods:{
        startNewDraft(){
            this.isComposeCmp = true
            console.log('ping');
        },
        saveDraft(){
            console.log('pong');
        }
    },
    components:{
        mailFilter,
        mailNav,
        mailTable,
        composeMail,
    }
}