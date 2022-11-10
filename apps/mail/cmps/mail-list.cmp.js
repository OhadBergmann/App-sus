import mailPreview from './mail-preview.cmp.js';
import { clientService } from '../services/mail.service.js'
import { eventBus } from '/services/event-bus.service.js';

export default {

    template: `
        <section class="mail-list">
            <mail-preview v-if="mailList && mailList.length > 0" v-for="mail in mailList" :mail="mail"/>

            <button @click="updateTab('inbox')">add Tab</button>
        </section>
    `,
    data() {
        return {
            mailList: null,
        }
    },
    created() {
        clientService.query()
            .then(emails => {
                this.mailList = emails;
            });
            eventBus.on('filter',this.onFilter);
        //console.log(this.$route);
        
    },
    methods:{
        updateTab(val){
            this.$router.push({path:'/mail/list', query:{tab:val}})
        },
        onFilter(value){
            if(!this.mailList) return;
            this.mailList = this.mailList.filter(()=>{
                return true;
            });
            console.log('on +' + value)
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