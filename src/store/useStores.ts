import React from 'react';
import RootStore from './RootStore';
import {MobXProviderContext} from 'mobx-react';
import {CanvasStore} from './CanvasStore';

interface Stores extends ReturnType<RootStore['getAllStores']> {
  canvasStore: CanvasStore;
}

const useStores = () => React.useContext(MobXProviderContext) as Stores;

export default useStores;
