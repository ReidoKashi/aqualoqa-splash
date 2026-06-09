(function () {
  const video = document.querySelector(".hero-video");
  const soundToggle = document.querySelector(".sound-toggle");

  if (!video) {
    return;
  }

  const sources = [
    {
      query: "(max-width: 640px) and (orientation: portrait)",
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
    video.play().catch(() => {});
  }

  function syncSoundButton() {
    if (!soundToggle) {
      return;
    }

    const isUnmuted = !video.muted;
    soundToggle.classList.toggle("is-unmuted", isUnmuted);
    soundToggle.setAttribute("aria-pressed", String(isUnmuted));
    soundToggle.setAttribute("aria-label", isUnmuted ? "Mute video" : "Unmute video");
  }

  function toggleSound(event) {
    video.muted = !video.muted;
    video.volume = 1;
    video.play().catch(() => {});
    syncSoundButton();

    if (event && event.pointerType !== undefined) {
      soundToggle.blur();
    }
  }

  selectVideoSource();
  syncSoundButton();
  window.addEventListener("resize", selectVideoSource);
  soundToggle?.addEventListener("click", toggleSound);
})();
