import { useState } from "react";
import "../../scss/Slider.scss";
import book1 from '../../../public/book1.png';
import book2 from '../../../public/book2.png';
import book3 from '../../../public/book3.png';
import book4 from '../../../public/book4.png';
import book5 from '../../../public/book5.png';
import book6 from '../../../public/book6.png';
import book7 from '../../../public/book7.png';
import book8 from '../../../public/book8.png';
import book9 from '../../../public/book9.png';
import book10 from '../../../public/book10.png';
import book11 from '../../../public/book11.png';
import book12 from '../../../public/book12.png';

const slides1 = [
    { imgSrc: book1, target: "#", },
    { imgSrc: book2, target: "#", },
    { imgSrc: book3, target: "#", },
    { imgSrc: book4, target: "#", },
    { imgSrc: book5, target: "#", },
    { imgSrc: book6, target: "#", },
    { imgSrc: book7, target: "#", },
    { imgSrc: book8, target: "#", },
    { imgSrc: book9, target: "#", },
    { imgSrc: book10, target: "#", },
    { imgSrc: book11, target: "#", },
    { imgSrc: book12, target: "#", },
];

export default function MainSlider() {
    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return (
        <div className="wrapper">
            <div className="slide_container" onMouseEnter={onStop} onMouseLeave={onRun}>
                <ul className="slide_wrapper">
                    <div className={"slide original".concat(animate ? "" : " stop")}>
                        {slides1.map((s, i) => (
                            <li key={i} className="big">
                                <div className="item" style={{ backgroundImage: `url(${s.imgSrc})` }}>
                                    {/* {s.text} */}
                                </div>
                            </li>
                        ))}
                    </div>
                    <div className={"slide clone".concat(animate ? "" : " stop")}>
                        {slides1.map((s, i) => (
                            <li key={i} className="big">
                                <div className="item" style={{ backgroundImage: `url(${s.imgSrc})` }}>
                                    {/* {s.text} */}
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}
