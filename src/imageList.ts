const images = Array.from({ length: 34 }, (_, index) => ({
  url: `/pictures/${index + 1}.jpg`,
  alt: "crianças praticando tênis",
}));

export default images;
