import BaiTapShoeShop from "./components/BaiTapShoeShop/BaiTapShoeShop";
import shoe from "./data.json";

function App() {
    return (
        <>
            <h1 className="container text-center mt-3">
                BaiTapShoeShop - Redux ToolKit
            </h1>

            <BaiTapShoeShop shoe={shoe} />
        </>
    );
}

export default App;
