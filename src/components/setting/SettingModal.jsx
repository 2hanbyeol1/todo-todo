import { useRef } from "react";
import WaveAudio from "../../assets/audio/wave.mp3";
import { COLOR } from "../../constants/theme";
import Modal from "../common/modal/Modal";

const SettingModal = ({ visible, closeModal, setNewColorTheme }) => {
  const audioRef = useRef();

  // audio
  const playAudio = () => audioRef.current.play();
  const stopAudio = () => audioRef.current.pause();

  return (
    <>
      <audio ref={audioRef} src={WaveAudio} loop></audio>
      {visible ? (
        <Modal title="🔨 설정" closeModal={closeModal}>
          <div className="setting-content">
            <div className="theme-sound">
              <h4>배경 음악</h4>
              <div className="setting-options">
                <button onClick={playAudio}>ON</button>
                <button onClick={stopAudio}>OFF</button>
              </div>
            </div>
            <div className="theme-colors">
              <h4>테마 색상</h4>
              <div className="setting-options">
                {Object.values(COLOR).map((c, i) => (
                  <button
                    key={i}
                    className={c}
                    onClick={() => setNewColorTheme(c)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingModal;
