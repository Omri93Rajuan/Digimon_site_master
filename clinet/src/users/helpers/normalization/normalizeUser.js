const normalizeUser = (user) => ({
  name: {
    first: user.first,
    last: user.last,
  },
  password : user.password,
  email: user.email,
  image: {
    url: user.url,
    alt: user.alt,
  },
  isBusiness: user.isBusiness,
});

export default normalizeUser;
