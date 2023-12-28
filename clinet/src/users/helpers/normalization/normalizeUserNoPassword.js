const normalizeUserNoPassword = (user) => ({
    name: {
      first: user.first,
      last: user.last,
    },
    email: user.email,
    image: {
      url: user.url,
      alt: user.alt,
    },
    isBusiness: user.isBusiness,
  });
  
  export default normalizeUserNoPassword;
  