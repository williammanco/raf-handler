export const store = {
  rAF: []
}
const id = { current: null }

export const update = timestamp => {
  const { rAF } = store
  for (let i = 0; i < rAF.length; i += 1) rAF[i](timestamp)
}

const initUpdate = timestamp => {
  update(timestamp)
  id.current = global.requestAnimationFrame(initUpdate)
}

export const resetUpdate = () => {
  if (id.current) global.cancelAnimationFrame(id.current)
  id.current = null
  store.rAF = null
}

export const subscribeUpdate = fn => {
  store.rAF.push(fn)
}

export const unsubscribeUpdate = (fn) => {
  for (let i = 0, { length } = store.rAF; i < length; i++) {
    if (store.rAF[i] === fn) {
      store.rAF.splice(i, 1);
      i--;
    }
  }
};

export default initUpdate
