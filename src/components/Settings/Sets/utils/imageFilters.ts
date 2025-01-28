export type ImageFiltersType = 'sepia' | 'hsl' | 'pointillize' | 'grayscale';

interface ImageFilter {
  data: Uint8ClampedArray;
  filter: ImageFiltersType;
}

const applyImageFilter = ({data, filter}: ImageFilter) => {
  switch (filter) {
    case 'sepia':
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        data[i] = r * 0.393 + g * 0.769 + b * 0.189;
        data[i + 1] = r * 0.349 + g * 0.686 + b * 0.168;
        data[i + 2] = r * 0.272 + g * 0.534 + b * 0.131;
      }
      break;

    case 'hsl':
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i] / 255;
        const g = data[i + 1] / 255;
        const b = data[i + 2] / 255;

        const avg = (r + g + b) / 3;
        data[i] = avg * 255;
        data[i + 1] = avg * 200;
        data[i + 2] = avg * 255;
      }
      break;

    case 'pointillize':
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        for (let j = 0; j < 16 && i + j < data.length; j += 4) {
          data[i + j] = r;
          data[i + j + 1] = g;
          data[i + j + 2] = b;
        }
      }
      break;

    case 'grayscale':
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }
      break;

    default:
      console.warn('Nieznany filtr:', filter);
      break;
  }
};

export default applyImageFilter;
