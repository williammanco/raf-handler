# raf-handler 

Simple small script to centralize request animation frame.

From an idea of [Lorenzo Migliorero](https://github.com/lorenzomigliorero)

[raf-handler](https://github.com/raf-handler/)


## Install

```sh
yarn add raf-handler
```

## Usage - Example

```js
import rAF, { subscribeUpdate, unsubscribeUpdate } from "raf-handler"


rAF() // start animationFrameRequest

export default () => {
  const update = timestamp => console.log(timestamp)

  subscribeUpdate(update) // to add your function in a rAF array

  unsubscribeUpdate(update) // to remove your function from a rAF array
}
```

## With react and hooks - Example

```js
import { useMemo, useCallback, useEffect } from "react"
import rAF, { subscribeUpdate, unsubscribeUpdate } from "raf-handler"


export default () => {
  useMemo(rAF, []) // autoinit only one time

  const update = useCallback(timestamp => {
    console.log(timestamp)
  }, [])

  useEffect(() => {
      subscribeUpdate(update) // add your function
    return () => {
      unsubscribeUpdate(update) // remove when unmount
    }
  }, [])

}
  
```

## Other function - Example
*Use with an external rAF* 

```js
import { subscribeUpdate, update as updateRAF } from "raf-handler"


export default () => {
  const update = (timestamp) => console.log(timestamp)

  const initUpdate = timestamp => {
    updateRAF(timestamp)
    id.current = window.requestAnimationFrame(initUpdate)
  }

  subscribeUpdate(update)

  initUpdate()
}

```

*Reset all rAF function* 

```js
import { resetUpdate } from "raf-handler"

resetUpdate()

```

## Build

```sh
yarn build
```

# License

MIT © [William Manco](mailto:wmanco88@gmail.com)