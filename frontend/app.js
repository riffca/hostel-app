import './view/scss/style.scss';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    history: false
});

import rootComp from './root';
let rootComponent = Vue.extend(rootComp);

let componentPath = './view/router';

router.map({
    '/': {
        name: 'home',
        component: require(componentPath+'/home')
    },
    '/contacts': {
        name: 'contacts',
        component: require(componentPath+'/contacts')
    },

    '/rooms': {
    	name: 'rooms',
    	component: require(componentPath+'/rooms'),
        subRoutes:{
            '/:name':{
                name: 'roomsIndex',
                component: {
                    template: `
                        <h1>{{ $route.params.name }}</h1>
                    `
                }
            }
        }
    }
});
router.start(rootComponent, '#application', () => {
    console.log('Роутер активен!');
    fetch('/hi',{method: 'GET'}).then(res=>{

        return res.text();

    }).then(data=>{
        console.log(data);
    });
});
