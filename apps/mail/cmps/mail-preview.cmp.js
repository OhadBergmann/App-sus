export default {
    props: ['mail'],
    template:`
        <section class="mail-item">
            <div class="mail-sender"> {{ mailData.from }}</div>
            <div class="mail-title"> {{ mailData.subject }} {{ shortenBody }} </div>
            <div class="attach-icon"> attach file icon </div>
            <div class="mail-date"> date </div>
        </section>
    `, data(){
        return {
            mailData: null,
        }
    },created(){
        this.mailData = this.mail;
    },computed:{
        shortenBody(){
            return this.mailData.body.substring(0, 50); 
        }
    }
}