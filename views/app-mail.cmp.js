import { clientService } from '../apps/mail/services/mail.service.js';
import { eventBus } from '/services/event-bus.service.js';
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js';
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js';
import mailTable from '../apps/mail/cmps/mail-table.cmp.js';
import composeMail from '../apps/mail/cmps/mail-compose.cmp.js';

export default {
    template:`
    <main class="mail-layout" @click="mouseClicked">
        <mail-filter />
        <section class="table-container">
            <mail-nav @composeNewMail="startNewDraft"/>
            <mail-table/>
        </section>
        <compose-mail class="mail-composer" :class="{conceal :!isComposeCmp}" 
        :isOpen="isComposeCmp" @saveToDraft="saveDraft" @saveAndClose="closeComposer"/>
    </main>
    `, data(){
        return {
            isComposeCmp: false,
            composeIntervalId: null,
        }
    },
    methods:{
        startNewDraft(){
            this.isComposeCmp = true
        },
        saveDraft(value){
            clientService.post('draft', value);
        },
        closeComposer(value){
            clientService.post('draft', value);
            this.isComposeCmp = false;
        },
        mouseClicked(){
            eventBus.emit('mouseClicked');
        }
    },
    components:{
        mailFilter,
        mailNav,
        mailTable,
        composeMail,
        eventBus,
    }
}