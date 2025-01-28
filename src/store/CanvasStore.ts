import applyImageFilter, {
  ImageFiltersType,
} from 'components/Settings/Sets/utils/imageFilters';
import {Canvas, FabricImage, IText, TPointerEventInfo} from 'fabric';
import {makeAutoObservable} from 'mobx';
export type SettingsSetType = 'bgColor' | 'text' | 'image' | null;
export type CursorType = 'default' | 'text';
export type FontStyleType = 'normal' | 'italic';
export type FontWeightType = '400' | '600' | '800';
export type FontSizeType =
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 64
  | 96
  | 128;

export class CanvasStore {
  canvas: Canvas | null = null;
  cursor: CursorType = 'default';
  settingsSet: SettingsSetType = null;
  history: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadCanvasState = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    if (e.currentTarget.files.length === 0) return;

    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        const jsonState = event.target.result as string;

        if (!this.canvas) return;
        this.canvas.loadFromJSON(JSON.parse(jsonState)).then(() => {
          this.canvas?.renderAll();
        });
      }
    };

    reader.readAsText(file);
  };

  saveCanvasState = () => {
    if (!this.canvas) return;

    const jsonState = JSON.stringify(this.canvas.toJSON());

    const blob = new Blob([jsonState], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'canvas-state.json';
    link.click();
  };

  setCanvas = (newCanvas: Canvas) => {
    this.canvas = newCanvas;
    this.saveState();
  };

  saveState = () => {
    if (!this.canvas) return;
    this.history.push(this.canvas.toJSON());
  };

  undoFnc = () => {
    if (!this.canvas || this.history.length === 1) return;

    this.history.pop();
    this.canvas
      .loadFromJSON(this.history[this.history.length - 1])
      .then(() => this.canvas?.renderAll());
  };

  addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files || e.currentTarget.files.length === 0) return;

    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result) return;

      const newImageElement = new Image();
      newImageElement.src = event.target.result as string;

      newImageElement.onload = () => {
        const fabricImage = new FabricImage(newImageElement);
        if (!event.target) return;
        fabricImage.set({
          imageSrc: event.target.result as string,
        });

        this.canvas?.add(fabricImage);
        this.saveState();
      };
    };

    reader.readAsDataURL(file);
  };

  changeCanvasBgColor = (newBgColor: string) => {
    if (!this.canvas) return;
    this.canvas.backgroundColor = newBgColor;
    this.canvas.renderAll();
    this.saveState();
  };

  setCursor = (cursor: CursorType) => {
    if (!this.canvas) return;
    this.cursor = cursor;
    this.canvas.defaultCursor = cursor;
  };

  setSettingsSet = (set: SettingsSetType) => {
    this.settingsSet = set;
  };

  addText = (left: number, top: number) => {
    const newItext = new IText('nowy tekst', {
      left: left,
      top: top,
      fontSize: 16,
      fontFamily: 'Arial',
      fontWeight: 500,
    });

    if (!this.canvas) return;
    this.cursor = 'default';
    this.canvas.defaultCursor = 'default';
    this.canvas.add(newItext);
    this.saveState();
  };

  changeTextColor = (color: string) => {
    if (!this.canvas) return;
    const textObject = this.canvas.getActiveObject();

    if (!textObject) return;
    textObject.set('fill', color);
    this.canvas.renderAll();
    this.saveState();
  };

  changeFontStyle = (fontStyle: FontStyleType) => {
    if (!this.canvas) return;
    const textObject = this.canvas.getActiveObject();

    if (!textObject) return;
    textObject.set('fontStyle', fontStyle);
    this.canvas.renderAll();
    this.saveState();
  };

  changeFontWeight = (fontWeight: FontWeightType) => {
    if (!this.canvas) return;
    const textObject = this.canvas.getActiveObject();

    if (!textObject) return;
    textObject.set('fontWeight', fontWeight);
    this.canvas.renderAll();
    this.saveState();
  };

  changeFontSize = (fontSize: FontSizeType) => {
    if (!this.canvas) return;
    const textObject = this.canvas.getActiveObject();

    if (!textObject) return;
    textObject.set('fontSize', fontSize);
    this.canvas.renderAll();
    this.saveState();
  };

  deleteActiveObject = () => {
    if (!this.canvas) return;
    const activeObject = this.canvas.getActiveObject();

    if (!activeObject) return;
    this.canvas.remove(activeObject);
    this.cursor = 'default';
    this.settingsSet = null;
    this.saveState();
  };

  setImageFilter = (imageFilter: ImageFiltersType) => {
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');

    if (!this.canvas) return;
    const activeObject = this.canvas.getActiveObject();

    if (!activeObject) return;
    const originalImage = new Image();

    if (activeObject.get('src')) originalImage.src = activeObject.get('src');
    if (activeObject.get('imageSrc'))
      originalImage.src = activeObject.get('imageSrc');

    originalImage.onload = () => {
      tempCanvas.width = originalImage.width;
      tempCanvas.height = originalImage.height;

      if (!tempContext) return;
      tempContext.drawImage(originalImage, 0, 0);

      const imageData = tempContext.getImageData(
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );

      const data = imageData.data;
      applyImageFilter({data, filter: imageFilter});

      tempContext.putImageData(imageData, 0, 0);

      const newImage = new Image();
      newImage.src = tempCanvas.toDataURL();

      newImage.onload = () => {
        const newFabricImage = new FabricImage(newImage, {
          left: activeObject.left,
          top: activeObject.top,
          scaleX: activeObject.scaleX,
          scaleY: activeObject.scaleY,
          angle: activeObject.angle,
        });

        newFabricImage.set({
          imageSrc: newImage.src,
        });
        if (!this.canvas) return;
        this.canvas.remove(activeObject);
        this.canvas.add(newFabricImage);
        this.canvas.setActiveObject(newFabricImage);
        this.canvas.renderAll();
        this.saveState();
      };
    };

    originalImage.onerror = () => {
      console.error('Nie udało się załadować obrazu.');
    };
  };

  mouseDownCanvas = (e: TPointerEventInfo) => {
    if (!this.canvas) return;
    const activeObject = this.canvas.getActiveObject();

    if (this.cursor === 'text')
      this.addText(e.viewportPoint.x, e.viewportPoint.y);

    if (this.cursor !== 'default') return;

    if (!activeObject) return;
    const type = activeObject.get('type');

    if (type === 'i-text') this.setSettingsSet('text');
    if (type === 'image') this.setSettingsSet('image');
  };
}
