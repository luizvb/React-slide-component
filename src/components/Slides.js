import React, { useState, useEffect } from 'react';

function Slides({slides}) {     
    
    const [slideIndex, setSlideIndex] = useState(0);
    const [disableNextButton, setDisableNextButton] = useState(false);
    const [disablePreviouosButton, setDisablePreviouosButton] = useState(false);
    const [disableRestartButton, setDisableRestartButton] = useState(false);

    const handleStatusButtons = () => {
        if (slideIndex === slides.length -1) {
            setDisableNextButton(true);
            return
        }
        if (slideIndex === 0) {
            setDisableRestartButton(true);
            setDisablePreviouosButton(true);
            return
        }

        setDisableNextButton(false);
        setDisablePreviouosButton(false);
        setDisableRestartButton(false);
    }

    const nextSlide = () => setSlideIndex(slideIndex + 1)
    const previousSlide = () => setSlideIndex(slideIndex -1);
    const resetSlide = () => setSlideIndex(0);

    useEffect(() => {
        handleStatusButtons();
    });
     
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={resetSlide} data-testid="button-restart" disabled={disableRestartButton} className="small outlined">Restart</button>
                <button onClick={previousSlide} data-testid="button-prev" disabled={disablePreviouosButton} className="small">Prev</button>
                <button onClick={nextSlide} data-testid="button-next" disabled={disableNextButton} className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideIndex].title}</h1>
                <p data-testid="text">{slides[slideIndex].text}</p>
            </div>
        </div>
    );
}

export default Slides;
