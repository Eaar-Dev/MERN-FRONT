import React, { useState } from "react";
import { Icon } from "../../../assets";
import { RegisterForm } from "../../../components/Admin/Auth";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import "./auth.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("PROPS=======");
  console.log(props);
  console.log("PROPS=======");

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function Auth() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="auth">
      <Icon.LogoWhite className="logo" />
      <Box sx={{ width: "50%", backgroundColor: "white", borderRadius: 2 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Entrar" />
          <Tab label="Registro" />
        </Tabs>

        <TabPanel value={value} index={0}>
          Iniciar Sesión.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Registrar un nuevo usuario.
          <RegisterForm value={value} />
        </TabPanel>
      </Box>
    </div>
  );
}
