import { svgService } from '../services/mail-svg.service.js';
import { eventBus } from '/services/event-bus.service.js';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default { 
    props:['isOpen'],
    template:`
        <section class="" ref="composerContainer">
            <header class="new-mail-header">
                <label>New Message</label>
                <div class="new-mail-handler">
                    <button class="minimize" title="Minimize" @click="switchSize('minimum')">
                        <img :src="minimizeCmp" alt="" />
                    </button>
                    <button class="full-screen" :title="fullScreenTitle" 
                    @click="switchSize('toggle')">
                        <img :src="shiftSize" alt="" />
                    </button>
                    <button class="save-and-close" title="Save & Close" @click="saveAndClose">
                        <img :src="closeX" alt="" />
                    </button>
                </div>
            </header>
            <section class="new-mail-body">
                <div class="send-to" @mouseleave="handleConcealment('null')" 
                :class="{twocells: hasTwoRecipient, threecells: hasThreeRecipient}"> 
                    <div class="recipient-placeholder" :class="{conceal: hasSubject}">Recipients</div>
                    <div class="to-txt" :class="{conceal: isToTxtConceal}">To:</div>
                    <input class="target-input recipient" v-model="newMailData.from" type="text" 
                    @focus="handleConcealment('focus')"/>
                    <button class="add-copy btn" @click="handleConcealment('copy')" 
                    :class="{conceal: !isCopyConceal, conceal: isToTxtConceal}">Cc</button>
                    <button class="add-blind-copy btn" @click="handleConcealment('blind')" 
                    :class="{conceal: !isBlindConceal, conceal: isToTxtConceal}">Bcc</button>
                    <div class="cc-txt" :class="{conceal: isCopyConceal}">Cc:</div>
                    <input class="copy-input recipient" :class="{conceal: isCopyConceal}" type="text"/>
                    <div class="bcc-txt" :class="{conceal: isBlindConceal}">Bcc:</div>
                    <input class="blind-input recipient" :class="{conceal: isBlindConceal}" type="text"/>
                </div>
                <div class="mail-subject">
                    <input class="subject-txt" v-model="newMailData.subject" type="text" 
                        placeholder="Subject"/>
                </div>
            </section>
            
        </section>
    `, 
    data(){
        return {
            saveIntervalId: 0,
            isToTxtConceal: true,
            isCopyConceal: true,
            isBlindConceal: true,
            hasTwoRecipient: false,
            hasThreeRecipient: false,
            composerSize: 'small',
            fullScreenTitle: 'Full Screen (shift for pop-out)',
            minimizeCmp: null,
            shiftSize: null,
            closeX: null,
            hasMouseClicked: false,
            recipientOutFocus: true,
            newMailData: {
                id: 'L3VNs3D7TCk',
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
        this.minimizeCmp = svgService.getMailIcon('minimizeIcon');
        this.shiftSize = svgService.getMailIcon('shiftSize');
        this.closeX = svgService.getMailIcon('closeX');

        eventBus.on('mouseClicked',()=>{
            this.hasMouseClicked = true;
        })
    },
    methods:{
        saveAndClose(){
            clearInterval(this.saveIntervalId);
            this.$emit('saveAndClose',this.newMailData);
            
        },
        switchSize(value){
            if(value === 'toggle'){
                if(this.composerSize === 'small'){
                    this.composerSize = 'large';
                } else if (this.composerSize === 'large'){
                    this.composerSize = 'small';
                } else {
                     /* this.composerSize === minimum*/
                     this.composerSize = 'large';
                }
            }else{
                 /* value === minimum*/
                this.composerSize = value;
            }
            
            const currRef = this.$refs.composerContainer;
            currRef.classList.remove('minimum'); 
            currRef.classList.remove('small');
            currRef.classList.remove('large');

            if(this.composerSize === 'small'){
                currRef.classList.add('small');
            } else if(this.composerSize === 'large'){
                currRef.classList.add('large');
            } else {
                /* this.composerSize === minimum*/
                currRef.classList.add('minimum');
            }
        },
        handleConcealment(activator){
            switch(activator){
                case 'focus' :
                    this.isToTxtConceal = false;
                    this.hasTwoRecipient = false;
                    this.hasThreeRecipient = false;
                    this.recipientOutFocus = false;
                    break;
                case 'copy' :
                    this.recipientOutFocus = false;
                    this.isToTxtConceal = false;
                    this.isCopyConceal = false;
                    break;
                case 'blind' :
                    this.recipientOutFocus = false;
                    this.isToTxtConceal = false;
                    this.isBlindConceal = false;
                    break;
                case 'null' :
                    this.recipientOutFocus = true;
                    break;
            }

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
        hasSubject(){
            return (this.newMailData.from.length > 0 || !this.isToTxtConceal)? true : false;
        }
    }, 
    watch:{
        isOpen:{
            handler(newValue, oldValue) {
                if(newValue){
                    this.saveIntervalId = setInterval(()=>{
                        this.$emit('saveToDraft',this.newMailData);
                    },3000);
                    //console.log('newValue: ',newValue,' |oldValue: ', oldValue);
                } 
            }
        },
        hasMouseClicked:{
            handler(newValue, oldValue) {
                if(newValue){
                    if(this.recipientOutFocus){
                        this.isToTxtConceal = true;
                        this.isCopyConceal = true;
                        this.isBlindConceal = true;
                        this.hasTwoRecipient = false;
                        this.hasThreeRecipient = false;
                    }
                   this.hasMouseClicked = false;
                } 
            }
        }

    },
    components:{
        svgService,
        eventBus,
        QuillEditor,
       
    }
}