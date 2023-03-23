import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

// J'importe la librairie bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// J'importe le fichier css
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="648355474544-hjr72g6s67pi11oq6su01b1eiiq42u1g.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
   </GoogleOAuthProvider>,
);