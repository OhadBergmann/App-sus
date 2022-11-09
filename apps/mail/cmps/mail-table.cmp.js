import mailList from './mail-list.cmp.js';

export default {
    props: ['emails'],
    template:`
    <section class="mail-table">
        <header></header>
        <mail-list />
    </section>
    `, data(){
        return {

        }
    }, components:{
        mailList,
    }
}