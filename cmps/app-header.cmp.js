export default {
    name: 'appHeader',

	template: `
        <header class="app-header flex space-between">
        <div class="sprite">
        <router-link to="/"><h1 class= title ></h1></router-link>
        </div>

            <nav class="main-nav flex align-center">
                <!-- <router-link to="/">Home</router-link>  -->
                <!-- <router-link to="/about">About</router-link> -->
                <!-- <router-link to="/keep"><span class="fa-solid fa-file" title="Notes"></span>Notes</router-link> -->
                <router-link to="/mail/list"><div class="sprite mail" title="Mail"></div></router-link>
                <router-link to="/keep"><div class="sprite keep" title="Notes"></div></router-link>
                <router-link to="/books"><div class="sprite books" title="Books"></div></router-link>
                <router-link to="/about"><div class="sprite about" title="About"></div></router-link>
				<!-- <router-link to="/books"><span class="fa-solid fa-book" title="Books"></span>Books</router-link> -->
            </nav>
        </header>
    `,
}
