import { eventBus } from '/services/event-bus.service.js';
import mailList from './mail-list.cmp.js';
import mailDetails from './mail-details.cmp.js';

export default {
    template:`
        <section class="mail-table">
            <header></header>
            <mail-list class="" :class="{hideme: isDetails}"/>
            <mail-details :class="{hideme: !isDetails}" class="hideme" />
        </section >
    `, 
    data(){
        return {
            isDetails: false,
        }
    },
    methods:{
        getDetails(mail){
            this.toggleDetails();
        },
        toggleDetails(){
            this.isDetails = !this.isDetails;
        }
    },
    created(){
        eventBus.on('showDetails', this.getDetails);
    },
    components:{
        eventBus,
        mailList,
        mailDetails,
    }
}