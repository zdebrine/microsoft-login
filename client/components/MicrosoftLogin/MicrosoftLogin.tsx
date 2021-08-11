import React from "react";
import * as msal from "@azure/msal-browser";

export const MicrosoftLogin = () => {
  const msalConfig = {
    auth: {
      clientId: "6ed59125-449d-47b8-a30f-19eee7dc1f3b",
    },
  };

  const msalInstance = new msal.PublicClientApplication(msalConfig);

  console.log(msalInstance);
  return <div>{"Login boi"}</div>;
};
