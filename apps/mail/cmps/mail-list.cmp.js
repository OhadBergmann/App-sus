import mailItem from './mail-item.cmp.js';

export default {
    props: ['emails'],
    template:`
        <section class="mail-list">
            <mail-item v-if="mailItems" v-for="mail in mailItems"/>
        </section>
    `, data(){
        return {
            mailItems: null,
        }
    },created(){

    },watch:{
        emails(){
            if(this.emails !== null && this.emails.length > 0){
                this.mailItems = this.emails;
                console.log('got emails! - list');
            }
        }
    },components:{
        mailItem,
    }
}