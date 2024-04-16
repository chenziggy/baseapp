import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ZInput from './ZInput.vue'
import {VzFlipClock} from 'vz-components'
import 'vz-components/theme-chalk/index.css'
import 'vz-components/theme-chalk/dark/css-vars.css'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')


const components = [
  ZInput,
]


 const installer = {
  install(app, options) {
    if (app[INSTALLED_KEY]) return 
    app.component('VzFlipClock',VzFlipClock)
    app.use(ElementPlus)
    app[INSTALLED_KEY] = true
    components.forEach((comp) => app.component(comp.name, comp))
  }
}

export default installer