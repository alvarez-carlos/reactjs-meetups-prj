import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { AllMeetups, NewMeetups, Favorites } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />}>
          All Meetups
        </Route>
        <Route path="/new-meetup" element={<NewMeetups />}>
          New Meetups
        </Route>
        <Route path="/favorites" element={<Favorites />}>
          Favorites
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
