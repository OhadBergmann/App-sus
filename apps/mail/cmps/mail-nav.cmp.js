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
        <div class="background-container"></div>
    </section>
    `, data(){
        return {
            hideDescription: true,
            isChopped: true,
            composeIcon: null, 

        }
    },created(){
        this.composeIcon = svgService.getMailIcon('composeNew');
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