export default {
    props: ['mail'],
    template:`
        <section class="mail-preview">
            <div class="mail-sender"> {{ mailSender }}</div>
            <div class="mail-title"> {{ mailData.subject }} {{ shortenBody }} </div>
            <div class="attach-icon"> attach file icon </div>
            <div class="mail-date"> {{ mailDate }} </div>
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
        },
        mailDate(){
            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September",
                                "October", "November", "December"];
            let currDate = new Date(this.mailData.sentAt);
            if(currDate.getFullYear() === new Date().getFullYear()){
                return currDate.getDay() + ' ' + monthNames[currDate.getMonth()];
            }
            return currDate.getUTCDay() + '/' + currDate.getUTCMonth() + '/' +  currDate.getUTCFullYear() ;
        }, 
        mailSender(){
            const currRegex = new RegExp('^\w{1,50}\b@');
            const str = this.mailData.from;
            console.log(str.match(currRegex));
            return str;
        }
    }
}