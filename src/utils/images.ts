import { ImageAsset } from '../types/images';

export const getImagePath = (path: string): string => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

export const getImageAsset = (path: string, alt: string, width?: number, height?: number): ImageAsset => {
  return {
    src: getImagePath(path),
    alt,
    width,
    height
  };
}; 