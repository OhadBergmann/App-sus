import mailItem from './mail-item.cmp.js';

export default {
    props: ['emails'],
    template:`
        <section class="mail-list">
            <!-- <mail-item v-if="mailItems" v-for="mail in mailItems"/> -->
        </article>
           
        </section>
    `, data(){
        return {
            mailItems: null,
        }
    },created(){

    },watch:{
        emails(){
            if(this.emails && this.emails.length > 0){
                this.mailItems = this.emails;
            }
        }
    },components:{
        mailItem,
    }
}