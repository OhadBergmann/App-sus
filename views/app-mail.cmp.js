import { clientService } from '../apps/mail/services/mail.service.js'

import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js';
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js';
import mailTable from '../apps/mail/cmps/mail-table.cmp.js';

export default {
    template:`
    <main class="mail-layout">
        <mail-filter />
        <section class="table-container">
            <mail-nav />
            <mail-table v-if="mailItems && mailItems.length > 0" :mailItems="mailItems" />
        </section>
        
    </main>
    `, data(){
        return {
            mailItems: null,
        }
    },created(){
        clientService.query()
        .then(emails=>{
            this.mailItems = emails;
        });
    },
    components:{
        mailFilter,
        mailNav,
        mailTable,
    }
}