# raf-handler

Simple small script to centralize request animation frame.

[raf-handler](https://github.com/raf-handler/)

## Install

```sh
npm i raf-handler
```

## Usage - Example

```js
import rAF, { subscribeUpdate, unsubscribeUpdate } from "raf-handler";

rAF({ fps: 60 } /* default and optional */); // start animationFrameRequest

export default () => {
  const update = (timestamp) => console.log(timestamp);

  subscribeUpdate(update); // to add your function in a rAF array

  unsubscribeUpdate(update); // to remove your function from a rAF array
};
```

## From main function (v0.0.4) - Example

```js
import rAF from "raf-handler";

export default () => {
  const update = (timestamp) => console.log(timestamp);

  const ticker = rAF();

  ticker.add(update); // to add your function in a rAF array

  ticker.remove(update); // to remove your function from a rAF array
};
```

## With react and hooks - Example

```js
import { useMemo, useCallback, useEffect } from "react";
import rAF, { subscribeUpdate, unsubscribeUpdate } from "raf-handler";

export default () => {
  useMemo(rAF, []); // autoinit only one time

  const update = useCallback((timestamp) => {
    console.log(timestamp);
  }, []);

  useEffect(() => {
    subscribeUpdate(update); // add your function
    return () => {
      unsubscribeUpdate(update); // remove when unmount
    };
  }, []);
};
```

## Other function - Example

_Use with an external rAF_

```js
import { subscribeUpdate, update as updateRAF } from "raf-handler";

export default () => {
  const update = (timestamp) => console.log(timestamp);

  const initUpdate = (timestamp) => {
    updateRAF(timestamp);
    id.current = window.requestAnimationFrame(initUpdate);
  };

  subscribeUpdate(update);

  initUpdate();
};
```

_Reset all rAF function_

```js
import { resetUpdate } from "raf-handler";

resetUpdate();
```

## Build

```sh
npm run build
```

# License

MIT © [William Manco](mailto:wmanco88@gmail.com)
