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
            <div class="send-to" @mouseleave="handleConcealment('null')" 
            :class="{twocells: hasTwoRecipient, threecells: hasThreeRecipient}"> 
                <div class="to-txt" :class="{conceal: isToTxtConceal}">To:</div>
                <input class="target-input recipient" type="text" @focus="handleConcealment('focus')"/>
                <button class="add-copy btn" @click="handleConcealment('copy')" 
                :class="{conceal: !isCopyConceal, conceal: isToTxtConceal}">Cc</button>
                <button class="add-blind-copy btn" @click="handleConcealment('blind')" 
                :class="{conceal: !isBlindConceal, conceal: isToTxtConceal}">Bcc</button>
                <div class="cc-txt" :class="{conceal: isCopyConceal}">Cc:</div>
                <input class="copy-input recipient" :class="{conceal: isCopyConceal}" type="text"/>
                <div class="bcc-txt" :class="{conceal: isBlindConceal}">Bcc:</div>
                <input class="blind-input recipient" :class="{conceal: isBlindConceal}" type="text"/>
            </div>
            <div class="mail-subject"></div>
        </section>
    `, 
    data(){
        return {
            saveInterval: 0,
            isToTxtConceal: true,
            isCopyConceal: true,
            isBlindConceal: true,
            hasTwoRecipient: false,
            hasThreeRecipient: false,
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
                    this.isToTxtConceal = false;
                    this.hasTwoRecipient = false;
                    this.hasThreeRecipient = false;
                    break;
                case 'copy' :
                    this.isToTxtConceal = false;
                    this.isCopyConceal = false;
                    break;
                case 'blind' :
                    this.isToTxtConceal = false;
                    this.isBlindConceal = false;
                    break;
                case 'null' :
                    this.isToTxtConceal = true;
                    this.isCopyConceal = true;
                    this.isBlindConceal = true;
                    this.hasTwoRecipient = false;
                    this.hasThreeRecipient = false;
                    break;
            }
            if(this.isToTxtConceal) return

            const recipientsStatus = this.isCopyConceal + this.isBlindConceal;
            if(recipientsStatus === 1){
                this.hasTwoRecipient = true;
            } else if (recipientsStatus === 0){
                this.hasTwoRecipient = false;
                this.hasThreeRecipient = true;
            }
        },
    },
    computed:{
    }, 
    components:{
        svgService,
       
    }
}