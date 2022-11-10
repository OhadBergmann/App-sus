import mailPreview from './mail-preview.cmp.js';
import { clientService } from '../services/mail.service.js'
import { eventBus } from '/services/event-bus.service.js';

export default {

    template: `
        <section class="mail-list">
            <mail-preview v-if="mailList && mailList.length > 0" v-for="mail in filteredMail" :mail="mail"/>

            <button @click="updateTab('inbox')">add Tab</button>
        </section>
    `,
    data() {
        return {
            mailList: null,
            filteredMail: null,
        }
    },
    created() {
        clientService.query()
            .then(emails => {
                this.mailList = emails;
                this.filteredMail = emails;
            });
            eventBus.on('filter',this.onFilter);
        //console.log(this.$route);
        
    },
    methods:{
        updateTab(val){
            this.$router.push({path:'/mail/list', query:{tab:val}})
        },
        onFilter(value){
            const str = value.toLowerCase()
            if(!this.mailList || !value || value.length < 1) {
                this.filteredMail = this.mailList;
                return;
            }
            const regex = new RegExp(value.toLowerCase(), 'i')
            this.filteredMail = this.mailList.filter((mail) => {return regex.test(mail.from)});
        }
    }
    ,
    components: {
        mailPreview,
        eventBus,
        clientService,
    },
    watch: {
        $route(newQuestion, oldQuestion) {
           console.log(this.$route);
          },
        $route: {
            handler(newValue, oldValue) {
                console.log(oldValue);
                console.log(this.$route)
            },
            deep: true
        }
    }


}