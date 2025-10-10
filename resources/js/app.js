require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';

// Initialize Prism
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/command-line/prism-command-line.js';
import 'prismjs/plugins/command-line/prism-command-line.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/autoloader/prism-autoloader';

Prism.plugins.NormalizeWhitespace.setDefaults({
	"remove-trailing": true,
	"remove-indent": true,
	"left-trim": true,
	"right-trim": true,
	"indent": 1,
});

Vue.prototype.$url = window.location.origin

Vue.use(Vuetify)
const app = new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    render: h=>h(App)
});