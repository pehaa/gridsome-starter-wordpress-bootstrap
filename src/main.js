import DefaultLayout from '~/layouts/Default.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

//global stylesheet
import '~/assets/style/styles.scss'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI('https://fonts.googleapis.com/css?family=Muli:400,400i,700|Corben:700&display=swap')
  })
}
