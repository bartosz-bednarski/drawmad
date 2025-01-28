import {CanvasStore} from './CanvasStore';

export default class RootStore {
  canvasStore: CanvasStore;
  constructor() {
    this.canvasStore = new CanvasStore();
  }

  getAllStores() {
    return {
      canvasStore: this.canvasStore,
    };
  }
}
