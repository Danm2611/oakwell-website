import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

/** Look up a photo by its file name (without the folder), e.g. photo('hero-slate-new-build.jpg'). */
export function photo(name: string): ImageMetadata {
  const key = `/src/assets/photos/${name}`;
  const mod = all[key];
  if (!mod) throw new Error(`Unknown photo: ${name}`);
  return mod.default;
}

export type GalleryCategory = 're-roofs' | 'flat-roofs' | 'new-build' | 'dormers' | 'chimneys-leadwork' | 'process';

export interface GalleryItem {
  file: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export const galleryCategories: { key: GalleryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 're-roofs', label: 'Re-roofs' },
  { key: 'new-build', label: 'New build' },
  { key: 'flat-roofs', label: 'Flat roofs' },
  { key: 'dormers', label: 'Dormers' },
  { key: 'chimneys-leadwork', label: 'Chimneys and leadwork' },
  { key: 'process', label: 'On site' },
];

export const gallery: GalleryItem[] = [
  { file: 'hero-slate-new-build.jpg', alt: 'Multi-gable slate roof on a new build seen from above', caption: 'Natural slate, new build', category: 'new-build' },
  { file: 'new-build-stone-house.jpg', alt: 'Large stone-built house with a complete slate roof', caption: 'Slate roof on a stone new build', category: 'new-build' },
  { file: 'new-build-stone-slate.jpg', alt: 'Stone new build with full slate roof under construction', caption: 'New build, slate with lead valleys', category: 'new-build' },
  { file: 'new-build-dormers-aerial.jpg', alt: 'Aerial view of a new build slate roof with dormers and garage roof', caption: 'Slate roof with three dormers', category: 'new-build' },
  { file: 'new-build-front-aerial.jpg', alt: 'Front elevation of a new build with slate roof, drone view', caption: 'New build, front elevation', category: 'new-build' },
  { file: 'new-build-rear-aerial.jpg', alt: 'Rear of a new build with slate roof, drone view', caption: 'New build, rear elevation', category: 'new-build' },
  { file: 'reroof-hip-slate-effect.jpg', alt: 'Hip roof re-covered in slate-effect tiles under a dramatic sky', caption: 'Re-roof in slate-effect tile', category: 're-roofs' },
  { file: 'reroof-hip-slate-effect-2.jpg', alt: 'Finished slate-effect tile hip roof with new ridge', caption: 'Slate-effect re-roof with dry ridge', category: 're-roofs' },
  { file: 'reroof-semi-van.jpg', alt: 'Re-roofed semi-detached house with the Oakwell van outside', caption: 'Re-roof, Leeds', category: 're-roofs' },
  { file: 'reroof-semi-hip.jpg', alt: 'Completed hip roof on a semi-detached house', caption: 'Concrete tile re-roof', category: 're-roofs' },
  { file: 'reroof-finished-scaffold.jpg', alt: 'Finished tile roof seen from the scaffold', caption: 'Re-roof, finished', category: 're-roofs' },
  { file: 'reroof-concrete-tile-chimneys.jpg', alt: 'Concrete tile hip roof with two chimney stacks', caption: 'Re-roof with chimneys repointed', category: 're-roofs' },
  { file: 'extension-tiled-roof.jpg', alt: 'Tiled pitched roof on a brick extension', caption: 'Extension roof', category: 're-roofs' },
  { file: 'ridge-roofer-terracotta.jpg', alt: 'Roofer on the ridge of a terracotta tile hip roof', caption: 'Ridge work, terracotta tile', category: 'process' },
  { file: 'team-terracotta-roof.jpg', alt: 'Two roofers finishing a terracotta tile roof', caption: 'The team on a tile re-roof', category: 'process' },
  { file: 'membrane-battens-process.jpg', alt: 'Breathable membrane and new battens before tiling', caption: 'Membrane and battens before tiling', category: 'process' },
  { file: 'tiles-being-laid.jpg', alt: 'Slate-effect tiles being laid on a roof', caption: 'Tiles going on', category: 'process' },
  { file: 'flat-roof-grp-lantern.jpg', alt: 'GRP flat roof with a roof lantern on a stone extension', caption: 'GRP flat roof with roof lantern', category: 'flat-roofs' },
  { file: 'flat-roof-grp-extension.jpg', alt: 'Grey GRP flat roof on a house extension', caption: 'GRP flat roof, extension', category: 'flat-roofs' },
  { file: 'flat-roof-single-ply-rooflights.jpg', alt: 'Single-ply flat roof with rooflights', caption: 'Single-ply roof with rooflights', category: 'flat-roofs' },
  { file: 'flat-roof-grp-bay.jpg', alt: 'GRP flat roof over a bay window', caption: 'GRP over a bay', category: 'flat-roofs' },
  { file: 'dormer-composite-cladding.jpg', alt: 'Finished dormer with composite cladding and tiled roof', caption: 'Dormer with composite cladding', category: 'dormers' },
  { file: 'dormer-tile-roof.jpg', alt: 'Tiled roof and dormer window', caption: 'Tile roof and dormer', category: 'dormers' },
  { file: 'dormer-in-progress.jpg', alt: 'Dormer being clad with scaffolding in place', caption: 'Dormer in progress', category: 'dormers' },
  { file: 'dormer-verge-detail.jpg', alt: 'Dry verge and cladding detail on a gable', caption: 'Dry verge and cladding detail', category: 'dormers' },
  { file: 'chimney-stone-rebuild.jpg', alt: 'Rebuilt stone chimney stack with new flaunching', caption: 'Stone chimney rebuild', category: 'chimneys-leadwork' },
  { file: 'leadwork-chimney-flashing.jpg', alt: 'Lead back gutter and step flashing to a chimney', caption: 'Lead back gutter and step flashing', category: 'chimneys-leadwork' },
  { file: 'stone-verge-scaffold.jpg', alt: 'Stone verge and slate roof from the scaffold', caption: 'Stone verge detail', category: 'chimneys-leadwork' },
];
