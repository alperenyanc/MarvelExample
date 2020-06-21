import AppStore from './providers/App';

stores = {};

export async function initializeStores() {
  stores.app = new AppStore(stores);
  //add here other stores as above

  for (const name of Object.keys(stores)) {
    if (!stores[name].isReady) {
      stores[name].isReady = true;
      await stores[name].setup();
    }
  }

  return stores;
}
export function getStores() {
  return stores;
}
