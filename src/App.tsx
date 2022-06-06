import { HomePage } from "features/listings/ListingPage";
import { CreatePage } from "features/listings/Create";
import { Route, Routes } from "react-router";
import { NavBar } from "features/design-system/nav-bar";
import { ListingDetailsPage } from "features/listings/ListingDetailsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/listings/:id" element={<ListingDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
