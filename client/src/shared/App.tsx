import React from "react"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from "../standard/NotFound";
import Home from "../home/Home";
import Fonts from '../Fonts'
import Lobby from "../standard/Lobby";
import AddExpense from "../forms/AddExpense";
import AddIncome from "../forms/AddIncome";

const App = (): React.ReactElement => {
  return (
    <ChakraProvider>
      <Fonts />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addExp" element={<AddExpense />} />
            <Route path="/addInc" element={<AddIncome />} />
            {/* <Route path="/draw" element={<Drawpad />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/:gameCode" element={<GamePage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
