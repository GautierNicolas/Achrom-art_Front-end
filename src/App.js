import { BrowserRouter, Routes, Route } from "react-router-dom";

// J'importe mes pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Messages from "./pages/Messages";
import ArtworksManager from "./pages/ArtworksManager";
import DashboardArtist from "./pages/DashboardArtist";

// J'importe mes composants
import ShowArtistById from "./components/ShowArtistById";
import Register from "./components/Register";
import UsersManager from "./pages/UsersManager";




// Je crée les routes de mon application
function App() {
    return (
        <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/artistid" element={<ShowArtistById />} />
          <Route path="/about" element={<About />} />
          <Route path="/manage_users" element={<UsersManager />} />
          <Route path="/manage_artworks" element={<ArtworksManager />} />
          <Route path="/dashboard_artist" element={<DashboardArtist />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;