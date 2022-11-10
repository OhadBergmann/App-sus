import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js';
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js';
import mailTable from '../apps/mail/cmps/mail-table.cmp.js';

export default {
    template:`
    <main class="mail-layout">
        <mail-filter />
        <section class="table-container">
            <mail-nav @composeNewMail="pingMe"/>
            <mail-table />
        </section>
        
    </main>
    `, data(){
        return {

        }
    },
    methods:{
        pingMe(){
            console.log('ping');
        }
    },
    components:{
        mailFilter,
        mailNav,
        mailTable,
    }
}