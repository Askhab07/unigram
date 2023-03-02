import { FC } from "react";
import "./modal.scss";
const Modal: FC<{active: boolean, setActive: (bol: boolean) => void}> = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h3>Создание публикации</h3>
                    <button>Далее</button>
                </div>
                <div className="modal__upload">
                    <h2>Перетащите сюда фото и видео</h2>
                    <button>Выбрать на компьютере</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;