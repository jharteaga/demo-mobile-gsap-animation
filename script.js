const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.top', { x: '-300%', ease: 'bounce' })
  .from('.bottom', { x: '200%', ease: 'bounce' })
  .from('.attribution', { y: '500%', ease: 'elastic' });
