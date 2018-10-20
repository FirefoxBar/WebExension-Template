import Vue from 'vue';
import App from './App';
import browser from 'webextension-polyfill';
import './options.scss';
import utils from '../core/utils';

Vue.use(VueMaterial);
new Vue({
	el: '#app',
	render: h => h(App)
});