export function createLinkElement (css) {
  const linkElement = document.createElement('link')
  linkElement.rel="stylesheet"
  linkElement.href = css
  const a = document.head.appendChild(linkElement)
}

export function registerGlobal(root, deps = {}) {
  Object.keys(deps).forEach((key) => {
    root[key] = deps[key]
  })
}
