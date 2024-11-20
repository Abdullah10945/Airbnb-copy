import Categories from "./Components/Categories/Categories";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import Footer from "./Components/Footer/Footer";
import Listings from "./Components/ListingCard/Listings";


function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Categories/>
      <Listings/>
      <Footer/>
    </div>
  );
}
export default App;
