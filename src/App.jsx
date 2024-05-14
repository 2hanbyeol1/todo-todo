import { useState } from "react";
import "./App.css";
import SettingImage from "./assets/settings.png";
import TrashImage from "./assets/trash.png";
import MODE from "./constants/mode";
import THEME from "./constants/theme";

function App() {
  const [theme, setTheme] = useState(THEME.BLUE);
  const [mode, setMode] = useState(MODE.LIGHT);

  return (
    <div className={`app ${theme} ${mode}`}>
      <header className="header">
        <button>
          <img
            className="header-setting-img"
            src={SettingImage}
            alt="설정 버튼 이미지"
          />
        </button>
      </header>
      <main>
        {/* input form */}
        <form className="todo-form">
          <input className="todo-input" placeholder="할 일 목록" />
          <button className="todo-submit-btn">등록</button>
        </form>
        {/* working section */}
        <section>
          <h3>✏️ working</h3>
          <div className="todo-list">
            <div className="todo-container">
              <label>
                <input type="checkbox" />
                <span>리액트 공부하기</span>
              </label>
              <button>
                <img
                  className="del-btn"
                  src={TrashImage}
                  alt="삭제 버튼 이미지"
                />
              </button>
            </div>
            <div className="todo-container">
              <label>
                <input type="checkbox" />
                <span>리액트 공부하기</span>
              </label>
              <button>
                <img
                  className="del-btn"
                  src={TrashImage}
                  alt="삭제 버튼 이미지"
                />
              </button>
            </div>
          </div>
        </section>
        {/* done section */}
        <section>
          <h3>✅ done</h3>

          <div className="todo-list">
            <div className="todo-container">
              <label>
                <input type="checkbox" />
                <span>리액트 공부하기</span>
              </label>
              <button>
                <img
                  className="del-btn"
                  src={TrashImage}
                  alt="삭제 버튼 이미지"
                />
              </button>
            </div>
            <div className="todo-container">
              <label>
                <input type="checkbox" />
                <span>리액트 공부하기</span>
              </label>
              <button>
                <img
                  className="del-btn"
                  src={TrashImage}
                  alt="삭제 버튼 이미지"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
