import {useEffect, useRef} from 'react';
import styles from './canvas.module.scss';
import {Canvas} from 'fabric';
import useStores from 'store/useStores';
import {observer} from 'mobx-react';

const CanvasMain = () => {
  const {canvasStore} = useStores();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const initCanvas = new Canvas(canvasRef.current, {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    initCanvas.backgroundColor = 'white';
    initCanvas.renderAll();

    canvasStore.setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, [canvasStore]);

  useEffect(() => {
    if (!canvasStore.canvas) return;
    canvasStore.canvas.on('mouse:down', (e) => {
      canvasStore.mouseDownCanvas(e);
    });
  }, [canvasStore]);

  return <canvas ref={canvasRef} className={styles.canvasMain}></canvas>;
};

export default observer(CanvasMain);
