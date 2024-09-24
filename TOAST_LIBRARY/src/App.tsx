import { showToast } from "./showToast.ts";

function App() {
    return (
        <div>
            <h1>React Portal</h1>
            <button onClick={() => showToast("this is a toast")}>모달 열기</button>
        </div>
    );
}

export default App;
