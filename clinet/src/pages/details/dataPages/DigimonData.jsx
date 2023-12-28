import { useEffect } from "react";
import Container from "@mui/material/Container";
import CardsFeedback from "../../../digimonData/components/CardsFeedback";
import useCards from "../../../digimonData/hooks/useCards";
import { useUser } from "../../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const CardsPage = () => {
  const { user } = useUser();
  
  const { handleGetCards, value, handleDeleteCard } = useCards();
  const { error, isLoading,filteredCards} = value;

  useEffect(() => {
    handleGetCards();
  }, []);
  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container>

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
