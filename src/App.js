import "./styles.css";
import { useState } from "react";

export default function App() {
  const [toast1, setToast1] = useState("none");
  const [toast2, setToast2] = useState("none");
  const [toast3, setToast3] = useState("none");

  function hide() {
    setToast1("none");
  }
  function hide2() {
    setToast2("none");
  }
  function hide3() {
    setToast3("none");
  }

  function showSuccess() {
    setToast3("none");
    setToast2("none");
    setToast1("");
  }

  function showWarning() {
    setToast3("none");
    setToast2("");
    setToast1("none");
  }

  function showError() {
    setToast2("none");
    setToast1("none");
    setToast3("");
  }

  return (
    <div className="App">
      <h1>Toast</h1>
      <div class="trigger">
        <button className="green" onClick={showSuccess}>
          Success
        </button>
        <button className="red" onClick={showWarning}>
          Warning
        </button>
        <button className="yellow" onClick={showError}>
          Error
        </button>
      </div>
      <div>
        <div className="success" style={{ display: toast1 }}>
          success notification :
          <button className="hidebtn" onClick={hide}>
            Hide
          </button>
        </div>

        <div className="warning" style={{ display: toast2 }}>
          warning notification :
          <button className="hidebtn" onClick={hide2}>
            Hide
          </button>
        </div>
        <div className="error" style={{ display: toast3 }}>
          Error notification :
          <button className="hidebtn" onClick={hide3}>
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}
