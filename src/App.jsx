import "../public/assets/css/main.css";
import "./style/style.css";
import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;

/*
⭐ Render Props: Truyền hàm =< Gọi hàm để quyết định render cái gì lên UI
    function DataFetcher({ render }) {
      const [data, setData] = React.useState(null);

      React.useEffect(() => {
        setTimeout(() => setData("Hello React!"), 1000);
      }, []);

      return render(data);
    }

    // Dùng render prop
    <DataFetcher render={(data) => (
      data ? <p>{data}</p> : <p>Loading...</p>
    )} />
*/
