import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { selectHomeItems } from '../../store/selectors';
import Store from '../../store';

type StartCardProps = {
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
};

const StartCard = () => (
  <Card className="my-4 mx-auto h-screen bg-white">
    <div>
      <h1>TIRED OF PEOPLE IMPERSONATING YOUR WORK?</h1>
      <p>
        Tired of getting impersonated and your Identity being used to phish/scam
        people ? Get your PressPass. An open, free, attestation of your
        credentials at work.
      </p>
      <button>Sign up</button>
      <button>Go to</button>
    </div>
  </Card>
);

const Start = () => {
  const homeItems = Store.useState(selectHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />

        <StartCard />
      </IonContent>
    </IonPage>
  );
};

export default Start;
