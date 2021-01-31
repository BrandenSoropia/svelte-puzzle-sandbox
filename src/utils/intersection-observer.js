const createIntersectionObserver = (root, options = {}, callback) => {
  const _options = {
    root,
    rootMargin: "0px",
    threshold: 0.9, // TODO: Change this to 1 once we snap to dial
    ...options,
  };

  return new IntersectionObserver(callback, _options);
};

export default createIntersectionObserver;
