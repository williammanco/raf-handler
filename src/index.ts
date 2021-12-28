if (!window || !window.requestAnimationFrame) {
  window.requestAnimationFrame = () => null;
  window.cancelAnimationFrame = () => null;
}

export interface TypesOptions {
  fps?: number;
}

export interface TypesStore {
  rAF?: { (timestamp: number): void }[];
  fps: number;
  then: number;
  id?: number;
  now?: number;
  delta?: number;
  interval?: number;
}

export const store: TypesStore = {
  rAF: [],
  fps: 60,
  then: Date.now(),
};

export const update = (timestamp: number) => {
  const { rAF } = store;

  store.interval = 1000 / store.fps;
  store.now = Date.now();
  store.delta = store.now - store.then;

  if (store.delta > store.interval) {
    store.then = store.now - (store.delta % store.interval);

    for (let i = 0, { length } = rAF; i < length; i += 1) rAF[i](timestamp);
  }

  return requestAnimationFrame(update);
};

export const resetUpdate = () => {
  if (store.id) window.cancelAnimationFrame(store.id);
  store.id = null;
  store.rAF = null;
};

export const subscribeUpdate = (fn: (timestamp: number) => any) => {
  if (!store.rAF) store.rAF = [];
  store.rAF.push(fn);
};

export const unsubscribeUpdate = (fn: (timestamp: number) => any) => {
  const { rAF } = store;
  for (let i = 0, { length } = rAF; i < length; i += 1) {
    if (rAF[i] === fn) {
      store.rAF.splice(i, 1);
      i--;
    }
  }
};

const initUpdate = (options?: TypesOptions) => {
  if (options?.fps) store.fps = options.fps;

  store.id = window?.requestAnimationFrame(update);

  return {
    reset: resetUpdate,
    add: subscribeUpdate,
    remove: unsubscribeUpdate,
    update,
    store,
  };
};

export default initUpdate;
