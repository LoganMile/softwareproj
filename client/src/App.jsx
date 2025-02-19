import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Routes, Route } from 'react-router-dom';
import Market from "./pages/market";

const App = () => (
  <div className="min-h-screen">
   
   <div className="gradient-bg-welcome">
   <Navbar />
   </div>
      <Routes>
        <Route path="/" element={<>
          <div className="gradient-bg-welcome">
          
       
      <Welcome />
    </div>
    <Services />
    <Transactions />
    </>}   />
    <Route path="/market" element={<Market />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
