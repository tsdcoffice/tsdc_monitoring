import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// I-import ang imong Menu component (himoa ni nga file, tan-awa sa ubos)
import Menu from './pages/Menu'; 
import Dashboard from './pages/Dashboard';
import Profiling from './pages/Profiling';



/* Core CSS & Themes (Keep these as they are) */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import UserAccount from './pages/UserAccount';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* 1. Ang SplitPane ang nag-divide sa Menu ug sa main Content */}
      <IonSplitPane contentId="main">
        
        {/* 2. Imong Sidebar Menu */}
        <Menu />

        {/* 3. Ang main area kung asa manggawas imong mga pages */}
        <IonRouterOutlet id="main">
        <Route path="/monitoring/app" component={Menu} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/account" component={UserAccount} />
        <Route exact path="/profiling" component={Profiling} />
        
        </IonRouterOutlet>

      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;