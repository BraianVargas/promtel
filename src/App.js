import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"



const styles = {
  main: {
    backgroundColor: "var(--color2)",
    color: "white",
  }

}
function App() {
  return (
    <div style={styles.main}>
      <Main/>
    </div>
  );
}

export default App;
