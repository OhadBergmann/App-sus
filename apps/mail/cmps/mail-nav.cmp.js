import { svgService } from '../services/mail-svg.service.js';


export default {
    template:`
    <section :class="{obfuscate: hideDescription, widthslash: isChopped}"
        @mouseenter="expendPanel"
        @mouseleave="detractPanel"
        class="mail-nav">
        <div @click="this.$emit('composeNewMail')" :class="{widthslash: isChopped}" class="compose-new-mail">
            <button>
                <img :src="composeIcon" alt="new" />
            </button>
            <span>Compose</span>
        </div>
        <router-link to="/mail/list">inbox</router-link> 
        <router-link to="/mail/stars">star</router-link> 
        <router-link to="/mail/schedules">schedule</router-link> 
        <router-link to="/mail/important">important</router-link> 
        <router-link to="/mail/outbox">sent</router-link>
        <router-link to="/mail/draft">draft</router-link> 
        
    </section>
    `, data(){
        return {
            hideDescription: true,
            isChopped: true,
            composeIcon: null, 
            inboxIcon: null,
            starIcon: null,
            scheduleIcon: null,
            importantIcon: null,
            sentIcon: null,
            draftIcon: null,

        }
    },created(){
        this.composeIcon = svgService.getMailIcon('composeNew');
        this.inboxIcon = svgService.getMailIcon('inboxIcon');
        this.starIcon = svgService.getMailIcon('star');
        this.scheduleIcon = svgService.getMailIcon('scheduleIcon');
        this.importantIcon = svgService.getMailIcon('notImportant');
        this.sentIcon = svgService.getMailIcon('sentIcon');
        this.draftIcon = svgService.getMailIcon('draftIcon');
         
    },
    methods:{
        expendPanel(){
            this.isChopped = false;
            setTimeout(() => {
                this.hideDescription = false;
            }, 75);
        },
        detractPanel(){
            this.isChopped = true;
            this.hideDescription = true
        }
    },
    components: {
        svgService
    }
}