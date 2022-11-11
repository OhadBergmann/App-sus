import { svgService } from '../services/mail-svg.service.js';

export default { 
    template:`
        <section class="" >
            <header class="new-mail-header">
                <label>New Message</label>
                <div class="new-mail-handler">
                    <button class="minimize" title="Minimize">
                        <img :src="minimizeCmp" alt="" />
                    </button>
                    <button class="full-screen" title="Full Screen (shift for pop-out)">
                        <img :src="shiftSize" alt="" />
                    </button>
                    <button class="save-and-close" title="Save & Close">
                        <img :src="closeX" alt="" />
                    </button>
                </div>
            </header>
            <div class="send-to">
                <div class="to-txt" :class="{conceal: isConceal}">To:</div>
                <input class="find-recipient" type="text" @focus="handleConcealment('focus')" @focusout="handleConcealment('quit')"/>
                <button class="add-copy btn">Cc</button>
                <button class="add-blind-copy btn">Bcc</button>
            </div>
            <div class="mail-subject"></div>
        </section>
    `, 
    data(){
        return {
            saveInterval: 0,
            isConceal: true,
            minimizeCmp: null,
            shiftSize: null,
            closeX: null,
            newMailData: {
                id: '',
                tab: '',
                subject:'',
                body:'',
                isRead: false,
                isImportant: false,
                hasStar: false,
                sentAt: -1,
                from:'',
                to:'',
                hasAttach: false
            },
            
        }
    },
    created(){
        this.saveInterval = setInterval(()=>{
            this.$emit('saveToDraft',this.newMailData);
        },3000);

        this.minimizeCmp = svgService.getMailIcon('minimizeIcon');
        this.shiftSize = svgService.getMailIcon('shiftSize');
        this.closeX = svgService.getMailIcon('closeX');
    },
    methods:{
        handleConcealment(activator){
            switch(activator){
                case 'focus' :
                    this.isConceal = false;
                    break;
                case 'quit' :
                    this.isConceal = true;
                    break;
            }
           
        },
    },
    computed:{
    }, 
    components:{
        svgService,
       
    }
}