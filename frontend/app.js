import VueRouter from 'vue-router';
Vue.use(VueRouter);


let router = new VueRouter({
    history: false
});
import rootComp from './root';


let rootComponent = Vue.extend(rootComp);

router.map({

    '/': {
        name: 'home',
        component: require('./view/router-home')
    },
    '/contacts': {
        name: 'contacts',
        component: require('./view/router-contacts')
    },

    '/:rooms': {
    	name: 'rooms',
    	component: require('./view/router-rooms')
    }
});
router.start(rootComponent, '#application', () => {
    console.log('Роутер активен!');
});
