import React, { useState } from 'react';

const FAQ = () => {
    const [showAnswer, setShowAnswer] = useState({});

    const toggleAnswer = (questionIndex) => {
        setShowAnswer(prevState => ({
            ...prevState,
            [questionIndex]: !prevState[questionIndex]
        }));
    };

    return (
        <div className='bg-slate-100 h-full'>
            <div className='flex justify-between'>
                <h2 className='font-bold ml-16 mt-8 text-3xl'>FAQ</h2>
                <h6 className='mr-36 mt-8'><span className='font-bold'>/ General</span> / FAQ</h6>
            </div>
            <h4 className='font-bold text-slate-400 ml-16 mt-8'>Start of the Internship</h4>
            <div className='mt-12'>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(0)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[0] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>What will be your role throughout the internship?</h4>
                    </div>
                    {showAnswer[0] && (
                        <div className='w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p> Your role will be to run a fundraising campaign through your network, pitching the cause to friends, family, co-workers, relatives, classmates etc. You will be guided about how to raise funds. The funds will be raised through Muskurahat's website with a transparent and systematic process followed throughout the internship.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(1)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[1] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>Will you be provided with any donor data for raising funds?</h4>
                    </div>
                    {showAnswer[1] && (
                        <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>We won’t be providing you with any leads or contacts for the internship.
                                But don't worry, from our end, you'll be guided from scratch. We will share all the required training modules, resources, and information. You'll learn how to run a successful campaign, pitching, marketing, etc. These will surely help you proceed well and find potential donors.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(2)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[2] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>What are the minimum working hours for the internship?</h4>
                    </div>
                    {showAnswer[2] && (
                        <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>Since it is work from home, the working hours are flexible. 2-3 hours a day, is enough. You can work at your own convenience.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(3)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[3] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>What is the stipend for the internship? Is there a fixed stipend for the internship?</h4>
                    </div>
                    {showAnswer[3] && (
                        <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>Stipend is performance based. This means you will get 20% of the amount you raise.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(4)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[4] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>How will your progress be tracked throughout the internship?</h4>
                    </div>
                    {showAnswer[4] && (
                        <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>As you proceed with the internship, you will be required to send weekly updates to your fundraising mentor about your progress and further plans.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(5)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[5] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>Can you see other fundraising platforms for your internship?</h4>
                    </div>
                    {showAnswer[5] && (
                        <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>No, you cannot use any other fundraising portals for raising funds for Muskurahat Foundation. Here are a few reasons why:
                                The portal will ask for various documents which can be time consuming.
                                They will ask for heavy taxes and additional service charges but not guarantee any fixed or additional donors.</p>
                        </div>
                    )}
                </div>
                <div className='w-full'>
                    <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                        onClick={() => toggleAnswer(6)}
                        style={{ cursor: 'pointer', backgroundColor: showAnswer[6] ? '#ffffff' : 'white' }}
                    >
                        <h4 style={{ margin: 0 }}>What is the eligibility criteria for receiving the Letter Of Recommendation from the President?</h4>
                    </div>
                    {showAnswer[6] && (
                        <div className='w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                            <p>Letter of Recommendation is performance based. You are eligible for it if you raise an amount of Rs. 30000 and above.</p>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
