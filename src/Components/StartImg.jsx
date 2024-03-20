import React from 'react'
import ImagePagination from "react-image-pagination";
import startHere1 from "../images/startHere1.webp";
import startHere2 from "../images/startHere2.webp";
import startHere3 from "../images/startHere3.webp";
import startHere4 from "../images/startHere4.webp";
import startHere5 from "../images/startHere5.webp";
import startHere6 from "../images/startHere6.webp";
import startHere7 from "../images/startHere7.webp";


const StartImg = () => {
    return (
        <div>
            <div className="">
                <header className="mx- my-10">
                    <ImagePagination
                        pages={[
                            { src: startHere1 },
                            { src: startHere2 },
                            { src: startHere3 },
                            { src: startHere4 },
                            { src: startHere5 },
                            { src: startHere6 },
                            { src: startHere7 }
                        ]}
                        dotDisplay={true}
                    />
                </header>
            </div>
        </div>
    )
}

export default StartImg;
