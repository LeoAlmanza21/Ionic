import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { Browser } from '@capacitor/browser';
import { IonList, IonThumbnail, IonImg, } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png', 
  text: 'Foto1' }];



const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Card Youtube</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Facebook</IonCardSubtitle>
            <IonCardTitle>¿Que es?</IonCardTitle>
          </IonCardHeader>
          <IonList>
            {items.map((image, i) => (
              <IonItem key={i}>
                <IonThumbnail slot="start">
                  <IonImg src={image.src} />
                </IonThumbnail>
                
              </IonItem>
            ))}
          </IonList>

          <IonCardContent>
          Facebook es un servicio de redes y medios sociales en línea estadounidense con sede 
          en Menlo Park, California. Su sitio web fue lanzado el 4 de febrero de 2004 por Mark 
          Zuckerberg, junto con otros estudiantes de la Universidad de Harvard y compañeros de 
          habitación, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz y Chris Hughes. 
          Pertenece a la empresa Meta que incluye otros servicios informáticos y de redes sociales.
          </IonCardContent>
          <IonButton onClick={() => openCapacitorSite()} expand="block" color='danger' shape='round'>Ir a Facebook</IonButton>
        </IonCard>

        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://www.facebook.com/' });
};