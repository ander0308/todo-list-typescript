import { GlobalStyled } from "./globalStyles";
import { TodosProvider } from "./contexts/TodoContext";

import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <GlobalStyled />
      <TodosProvider>
        <Home />
      </TodosProvider>
    </>
  );
};

export default App;
