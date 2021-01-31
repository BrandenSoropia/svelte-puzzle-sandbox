const createIntersectionObserver = (root, options = {}, callback) => {
  const _options = {
    root,
    rootMargin: "0px",
    threshold: 1,
    ...options,
  };

  return new IntersectionObserver(callback, _options);
};

export default createIntersectionObserver;
