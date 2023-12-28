const mapCardToModel = (card) => {
  return {
    name: card.company,
    nameInEn: card.title,
    type: card.role,
    description: card.description,
    level: card.phone,
    url: card.email, 
    alt:card.isDone  
    
  };
};

export default mapCardToModel;
