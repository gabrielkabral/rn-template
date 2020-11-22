// @ts-nocheck
let _store = {}

const GlobalStore = {
  get: () => _store,
  getState: () => _store && _store.getState(),
  set: (store) => {
    _store = store
  }
}
Object.freeze(GlobalStore)

export default GlobalStore
