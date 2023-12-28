/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../../menu/MenuProvider";
import useUsers from "../../../../users/hooks/useUsers";
import mapUserToModel from "../../../../users/helpers/normalization/mapUserToModel";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const Logged = () => {
  const setOpen = useMenu();
  const [userData, setUserData] = useState("");
  const { handleGetUser, value } = useUsers();
  const { isLoading, error, user } = value;

  useEffect(() => {
    handleGetUser(user._id).then((data) => {
      const mapUser = mapUserToModel(data);
      setUserData(mapUser);
      console.log(userData);
    });
  }, [handleGetUser, user._id]);
  console.log(userData);
  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2, color:'white'}}
        onClick={() => setOpen(true)}
      >
        <Avatar sx={{ width: 56, height: 56 }} alt="Bird" src={userData.url} />
        שלום {userData.first}
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
