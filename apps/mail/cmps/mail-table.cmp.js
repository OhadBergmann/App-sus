import mailList from './mail-list.cmp.js';

export default {
    props: ['emails'],
    template:`
        <section class="mail-table">
            <header></header>
            <mail-list :mailItems="mailItems"/>
        </section>
    `, data(){
        return {
            mailItems: null,
        }
    },created(){
        
    },watch:{
        emails(){
            this.mailItems = this.emails;
            console.log(this.emails)
        }
    },components:{
        mailList,
    }
}