const mapUserToModel = (user) => {
    return {
      first: user.name.first,
      last: user.name.last,
      password : user.password,
      email: user.email,
      url: user.image.url,
      alt: user.image.alt,
      isBusiness:user.isBusiness,
    };
  };
  
  export default mapUserToModel;
  