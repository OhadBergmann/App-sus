import { svgService } from '../services/mail-svg.service.js';

export default {
    template:`
    <section class="mail-filter">
        <div class="open-menu" v-html="openMenuIcon"></div> 
        <img class="refresh-page" src="./assets/img/mail-logo.png" />
        <input type="search" class="search-bar"/>
    </section>
    `, data(){
        return {
            openMenuIcon: null,
        }
    },created(){
        this.openMenuIcon = svgService.getKeepIcon('bars');
    },components:{
        svgService,
    }
}