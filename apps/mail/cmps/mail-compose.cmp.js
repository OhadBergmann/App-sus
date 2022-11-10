export default { 
    template:`
        <section class="" >
        </section>
    `, 
    data(){
        return {
            saveInterval: 0,
            newMailData: {
                id: '',
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