export default { 
    template:`
        <section class="" >
            <header class="new-mail-header">
                <label>New Message</label>
                <div class="new-mail-handler">
                    <button class="minimize" title="Minimize"></button>
                    <button class="full-screen" title="Full Screen (shift for pop-out)"></button>
                    <button class="save-and-close" title="Save & Close"></button>
                </div>
            </header>
            <div class="send-to"></div>
            <div class="mail-subject"></div>
        </section>
    `, 
    data(){
        return {
            saveInterval: 0,
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
        },3000)
    },
    methods:{

    },
    computed:{
    }, 
    components:{
       
    }
}