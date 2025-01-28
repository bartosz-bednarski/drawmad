import { cleanup, findByTestId, fireEvent, getByText, render,screen, waitFor } from '@testing-library/react';
import { Provider } from 'mobx-react';
import React from 'react';
import ToolsMenu from './ToolsMenu';
import { CursorType, SettingsSetType } from 'store/CanvasStore';
import {makeAutoObservable, makeObservable} from 'mobx'
import RootStore from 'store/RootStore';
afterEach(cleanup);

class CanvasStore {
    settingsSet:SettingsSetType= null;
cursor:CursorType='default';

setCursor = (cursor:CursorType) =>{
this.cursor = cursor
};

setSettingsSet = (set: SettingsSetType) => {
    this.settingsSet = set;
  };
}

it("works",async ()=>{
    const rootStore = new RootStore();

   render(<Provider rootStore={rootStore} {...rootStore.getAllStores()}>
    <ToolsMenu/>
</Provider>)
const buttons = screen.getAllByRole('button')
const textButton = buttons[3]
expect(textButton).toBeInTheDocument()
fireEvent.click(textButton);
await waitFor(()=>{
    expect(screen.getByTestId("settings-box")).toBeInTheDocument()
})
// const settingsBox = screen.getByTestId("settings-box")
// // const textColorLabel = screen.getByText('Kolor tekstu');
// expect(settingsBox).toBeInTheDocument()
    console.log(screen)
})