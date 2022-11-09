import { svgService } from '../services/mail-svg.service.js';
import searchForm from './search-form.cmp.js'


export default {
    template:`
    <section class="mail-filter">
        <div class="open-menu circle-animation" v-html="openMenuIcon"></div> 
        <img class="refresh-page" src="./assets/img/mail-logo.png" />
        <div class="search-bar">
            <div class="search-icon circle-animation" v-html="searchIcon"></div>
            <input type="search" class="search-field"/>
            <div @click="disableAdvanceIcon" class="advance-search circle-animation" :class="{hideme: isHidden}"
            v-html="advanceIcon"></div>
            <search-form :class="{hideme: !isHidden}"/>
        </div> 
    </section>
    `, data(){
        return {
            openMenuIcon: null,
            searchIcon: null,
            advanceIcon: null,
            isHidden: false,
        }
    },methods:{
        disableAdvanceIcon(){
            this.isHidden = true;
        }
    }, created(){
        this.openMenuIcon = svgService.getKeepIcon('bars');
        this.searchIcon = svgService.getKeepIcon('search');
        this.advanceIcon = svgService.getKeepIcon('controls');
    },components:{
        svgService,
        searchForm,
    }
}