import React from 'react';
import useStores from 'store/useStores';
import stylesSettings from '../settingsBox.module.scss';
import getImageSet from './utils/getImageSet';
import {ImageFiltersType} from './utils/imageFilters';

const ImageSet = () => {
  const {canvasStore} = useStores();

  const deleteActiveObjectHandler = () => {
    canvasStore.deleteActiveObject();
  };

  const setImageFilterHandler = (imageFilter: ImageFiltersType) => {
    canvasStore.setImageFilter(imageFilter);
  };

  const IMAGE_SET = getImageSet({
    deleteActiveObjectHandler,
    setImageFilterHandler,
  });

  return (
    <div className={stylesSettings.box}>
      {IMAGE_SET.map((set, index) => (
        <React.Fragment key={index}>
          <label className={stylesSettings.title}>{set.label}</label>
          <div className={stylesSettings.rowBox}>
            {set.content.map((contentItem) => (
              <React.Fragment key={contentItem.key}>
                {contentItem}
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ImageSet;
