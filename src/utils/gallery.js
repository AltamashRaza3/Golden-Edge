export const getGalleryData = () => {
  const images = import.meta.glob(
    "/src/assets/webp-images/**/*.webp",
    { eager: true }
  );

  console.log("IMAGES:", images);

  const grouped = {};

  Object.keys(images).forEach((path) => {
    const parts = path.split("/");
    const folder = parts[parts.length - 2];

    if (!grouped[folder]) {
      grouped[folder] = [];
    }

    grouped[folder].push(images[path].default);
  });

  console.log("GROUPED:", grouped);

  return grouped;
};