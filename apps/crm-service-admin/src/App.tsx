import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { CallRecordList } from "./callRecord/CallRecordList";
import { CallRecordCreate } from "./callRecord/CallRecordCreate";
import { CallRecordEdit } from "./callRecord/CallRecordEdit";
import { CallRecordShow } from "./callRecord/CallRecordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRM Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="CallRecord"
          list={CallRecordList}
          edit={CallRecordEdit}
          create={CallRecordCreate}
          show={CallRecordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
