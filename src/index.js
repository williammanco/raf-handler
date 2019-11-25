if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = () => null
  global.cancelAnimationFrame = () => null
}

const id = { current: null }

export const store = {
  rAF: []
}

export const update = timestamp => {
  const { rAF } = store
  for (let i = 0, { length } = rAF;  i < length; i += 1) rAF[i](timestamp)
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
  const { rAF } = store
  for (let i = 0, { length } = rAF; i < length; i += 1) {
    if (rAF[i] === fn) {
      store.rAF.splice(i, 1);
      i--;
    }
  }
};

const initUpdate = timestamp => {
  update(timestamp)
  id.current = global.requestAnimationFrame(initUpdate)

  return {
    reset: resetUpdate,
    add: subscribeUpdate,
    remove: unsubscribeUpdate,
    update,
    store,
  }
}



export default initUpdate
