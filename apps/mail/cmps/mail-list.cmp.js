import mailPreview from './mail-preview.cmp.js';
import { clientService } from '../services/mail.service.js'

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
        console.log(this.$route);
       
        clientService.query()
            .then(emails => {
                this.mailList = emails;
            });
    },
    methods:{
        updateTab(val){
            this.$router.push({path:'/mail/list', query:{tab:val}})
        }
    }
    ,
    components: {
        mailPreview,
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