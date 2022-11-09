import mailPreview from './mail-preview.cmp.js';
import { clientService } from '../services/mail.service.js'

export default {

    template:`
        <section class="mail-list">
            <mail-preview v-if="mailList && mailList.length > 0" v-for="mail in mailList" :mail="mail"/>
        </section>
    `, data(){
        return {
            mailList: null,
        }
    },created(){
        clientService.query()
        .then(emails=>{
            this.mailList = emails;
        });
    },components:{
        mailPreview,
    }
}