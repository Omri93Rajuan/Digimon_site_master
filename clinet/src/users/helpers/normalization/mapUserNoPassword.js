const mapUserNoPassword = (user) => {
    return {
      first: user.name.first,
      last: user.name.last,
      email: user.email,
      url: user.image.url,
      alt: user.image.alt,
      isBusiness:user.isBusiness,
    };
  };
  
  export default mapUserNoPassword;
  