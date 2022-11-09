import mailList from './mail-list.cmp.js';

export default {
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