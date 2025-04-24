export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ImageCollection {
  [key: string]: ImageAsset;
} 