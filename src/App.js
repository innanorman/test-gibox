import "./styles.scss";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route index element={<Home />}/>
        <Route path="/news/:newsId" element={<NewsPage />}/>
      </Routes> */}
      <Home />
      
      <footer className="footer">Copyrights © 2017 All Rights Reserved by Gibox Digital.</footer>
    </div>
  );
}
