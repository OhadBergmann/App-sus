import { svgService } from '../services/mail-svg.service.js';
import { eventBus } from '/services/event-bus.service.js';
import searchForm from './search-form.cmp.js';


export default {
    template:`
    <section class="mail-filter">
        <div class="open-menu circle-animation" v-html="openMenuIcon"></div> 
        <img class="refresh-page" src="./assets/img/mail-logo.png" />
        <div class="search-bar">
            <div class="search-icon circle-animation" v-html="searchIcon"></div>
            <input type="search" class="search-field" v-model="filterBy.txt" @input="onFilter"/>
            <div @click="openForm" class="advance-search circle-animation" :class="{hideme: isHidden}"
            v-html="advanceIcon"></div>
            <search-form ref="elForm" :class="{hideme: !isHidden}"/>
        </div> 
    </section>
    `, 
    data(){
        return {
            openMenuIcon: null,
            searchIcon: null,
            advanceIcon: null,
            isHidden: false,
            filterBy: {
                txt: ''
            }
        }
    },
    created(){
        this.openMenuIcon = svgService.getKeepIcon('bars');
        this.searchIcon = svgService.getKeepIcon('search');
        this.advanceIcon = svgService.getKeepIcon('controls');
        
    },
    mounted(){
        this.$emit('filter', this.filterBy.txt);
    },
    methods:{
        openForm(){
            this.isHidden = true;
            setTimeout(() => {
                document.addEventListener('click', this.onClick);
            }, 50); 
        },
        closeForm(){
                document.removeEventListener('click', this.onClick);
                this.isHidden = false;
        },
        onClick($event) {
            const mousePos = {x: $event.clientX, y: $event.clientY}
            const elTopLeftPos = {x: this.$refs.elForm.$el.getBoundingClientRect().left,
                y:this.$refs.elForm.$el.getBoundingClientRect().top}
            const height = this.$refs.elForm.$el.clientHeight;
            const width = this.$refs.elForm.$el.clientWidth;
            
            if((elTopLeftPos.x <= mousePos.x && mousePos.x <= elTopLeftPos.x + width) && 
            (elTopLeftPos.y <= mousePos.y && mousePos.y <= elTopLeftPos.y + height)){
               return;
            }
            this.closeForm();
        }, onFilter(){
            console.log(filterBy.txt)
        }
    }
    ,components:{
        svgService,
        searchForm,
        eventBus,
    }
}