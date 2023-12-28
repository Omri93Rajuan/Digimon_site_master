const normalizeCard = (card) => {
  return {
    name: card.company,
    nameInEn: card.title,
    type: card.role,
    description: card.description,
    level: card.phone,
    image: {
      url: card.url,
      alt: card.alt,
    },

  };
};

export default normalizeCard;
