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
        <section class="filters">
            <router-link to="/mail/list">
                <button>
                    <img :src="inboxIcon" alt="inbox" />
                </button>
                <div class="inbox-txt">inbox</div>
            </router-link> 
            <router-link to="/mail/stars">
                <button>
                    <img :src="starIcon" alt="starred" />
                </button>
                <div class="star-txt">starred</div>
            </router-link> 
            <router-link to="/mail/schedules">
                <button>
                    <img :src="scheduleIcon" alt="snoozed" />
                </button>
                <div class="snoozed-txt">snoozed</div>
            </router-link> 
            <router-link to="/mail/important">
                <button>
                    <img :src="importantIcon" alt="important" />
                </button>
                <div class="important-txt">important</div>
            </router-link> 
            <router-link to="/mail/outbox">
                <button>
                    <img :src="sentIcon" alt="sent" />
                </button>
                <div class="sent-txt">sent</div>
            </router-link>
            <router-link to="/mail/draft">
                <button>
                    <img :src="draftIcon" alt="draft" />
                </button>
                <div class="draft-txt">draft</div>
            </router-link> 
        </section>
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