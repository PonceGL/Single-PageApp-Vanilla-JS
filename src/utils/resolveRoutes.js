const resolveRoutes = (hash) => {
  if (hash === '/') {
    return hash;
  } else {
    return window.location.hash.slice(1, 8);
  }
};

export default resolveRoutes;
