import { StyledEngineProvider } from "@mui/material";
import styles from "./App.module.css"
import Navbar from "./components/Navbar/navbar";
import Bodytext from "./components/poster/poster";
import Section from "./components/section/section";
function App() {
  return (
    <StyledEngineProvider injectFirst>
    
      <div className={styles.container}>
        <Navbar/>
        <Bodytext/>
      </div>
      <Section/>
   
    
    </StyledEngineProvider>
  );
}

export default App;
