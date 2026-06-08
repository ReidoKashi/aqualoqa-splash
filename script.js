(function () {
  const video = document.querySelector(".hero-video");

  if (!video) {
    return;
  }

  const sources = [
    {
      query: "(max-width: 640px)",
      src: video.dataset.mobileSrc,
    },
    {
      query: "(max-width: 1180px)",
      src: video.dataset.tabletSrc,
    },
    {
      query: "(min-width: 1181px)",
      src: video.dataset.defaultSrc,
    },
  ];

  function selectVideoSource() {
    const match = sources.find((source) => window.matchMedia(source.query).matches);
    const src = match ? match.src : video.dataset.defaultSrc;
    const absoluteSrc = new URL(src, window.location.href).href;

    if (video.currentSrc === absoluteSrc || video.src === absoluteSrc) {
      return;
    }

    video.src = src;
    video.load();
  }

  selectVideoSource();
  window.addEventListener("resize", selectVideoSource);
})();
