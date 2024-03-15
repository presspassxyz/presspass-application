import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
} from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Start';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonPage>
      {/*    <IonTabs>  */}
      <IonRouterOutlet>
        <Route path="/start" render={() => <Home />} exact={true} />
        <Route path="/lists" render={() => <Lists />} exact={true} />
        <Route
          path="/lists/:listId"
          render={() => <ListDetail />}
          exact={true}
        />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="" render={() => <Redirect to="/start" />} exact={true} />
      </IonRouterOutlet>
      {/*       <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/start">
          <IonIcon icon={flash} />
          <IonLabel>Start</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/lists">
          <IonIcon icon={list} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar> 
   </IonTabs> */}
    </IonPage>
  );
};

export default Tabs;
