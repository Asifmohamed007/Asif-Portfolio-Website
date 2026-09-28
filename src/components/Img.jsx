/**
 * <img> with the performance attributes every image should have:
 * width/height (reserves space, no layout shift), lazy loading below the fold,
 * async decoding. `draggable=false` is kept from the original site.
 */
export default function Img({ image, alt, className, lazy = true, priority = false }) {
  return (
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      className={className}
      loading={lazy && !priority ? 'lazy' : undefined}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      draggable="false"
    />
  );
}
