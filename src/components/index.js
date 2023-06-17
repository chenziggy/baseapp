import ZInput from './ZInput.vue'
const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const components = [
  ZInput
]


 const installer = {
  install(app, options) {
    if (app[INSTALLED_KEY]) return 
    app[INSTALLED_KEY] = true
    components.forEach((comp) => app.component(comp.name, comp))
  }
}

export default installer