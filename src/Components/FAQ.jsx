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
            <div className='mb-8'>
                <h4 className='font-bold text-slate-400 ml-16 mt-10'>Start of the Internship</h4>
                <div className='mt-10 '>
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

                <h4 className='font-bold text-slate-400 ml-16 mt-10'>Technical queries</h4>
                <div className='mt-10'>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(7)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[0] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>Do I need to share my referral link with all my donors?</h4>
                        </div>
                        {showAnswer[7] && (
                            <div className='w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p> Yes, it is important to ensure that the donors use your referral link while donating. This is because when the donor donates using your link, your unique code will automatically apply. Once the payment is successfully processed, the amount will show on your dashboard and it will be counted under your name.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(8)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[1] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>How much time will it take for a transaction to show up on my dashboard?</h4>
                        </div>
                        {showAnswer[8] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>The amount usually appears immediately on your dashboard. But if not, it will appear maximum within 12 hours.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(9)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[2] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>My reference has made a donattion, but it is not showing on the dashboard?</h4>
                        </div>
                        {showAnswer[9] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>Firstly check with the donor if they have applied your referral code while donating. If they have applied the code, yet the amount does not show, wait for a while.
                                    And if they haven’t applied the code, share the donor’s email address or screenshot of the receipt with your fundraising mentor for further assistance.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(10)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[3] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>My reference can't make a donation. Can you help me with it?</h4>
                        </div>
                        {showAnswer[10] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>If there are any technical issues due to which you are unable to access your dashboard or the donor is unable to process the donation, share your referral link with your fundraising mentor for further assistance.</p>
                            </div>
                        )}
                    </div>
                </div>



                <h4 className='font-bold text-slate-400 ml-16 mt-10'>Donor related queries</h4>
                <div className='mt-10'>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(11)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[0] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>I have few donors staying abroad and they have international cards. How can they donate?</h4>
                        </div>
                        {showAnswer[11] && (
                            <div className='w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>FCRA certificate's only purpose is for accepting foreign donations. Muskurahat Foundation has not been issued the FCRA certification yet.
                                    So, as per our present government policy, we cannot directly accept foreign donations. But there is a way. That the donor sends it to you, and you donate on their behalf.
                                    For doing so,
                                    You will have to apply their details while donating. Which is just name, email and number. Once you put their details, they will receive the donation receipt, mentioning their name and amount.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(12)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[1] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>A donor wants to donate througgh cash/cheque. Is it possible to do so?</h4>
                        </div>
                        {showAnswer[12] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>Yes, there is an offline method of donating. The donor can directly deposit the cash or cheque to our Axis bank account. If needed, details will be sent by your fundraising mentor.
                                    Or, the second option is that you collect the amount in cash or the donor sends it to you using any other method, and you make the donation on their behalf.
                                    For doing so,
                                    You will have to apply their details while donating. Which is just name email and number. Once you put their details, they will receive the donation receipt, mentioning their name and amount.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(13)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[2] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>What is the minimum amount of someone can donate?</h4>
                        </div>
                        {showAnswer[13] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>The minimum donation starts from ₹1.</p>
                            </div>
                        )}
                    </div>
                    <div className='w-full'>
                        <div className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mt-4 mx-16'
                            onClick={() => toggleAnswer(14)}
                            style={{ cursor: 'pointer', backgroundColor: showAnswer[3] ? '#ffffff' : 'white' }}
                        >
                            <h4 style={{ margin: 0 }}>My donor wants to make an anonymous donation. How does it work?</h4>
                        </div>
                        {showAnswer[14] && (
                            <div className=' w-5/6 h-24 pt-5 pl-8 bg-white mt-2 mx-16'>
                                <p>Ensure that the donor uses your referral link for donating any amount.
                                    Incase of an anonymous donation, the donor can use your personal details so that once the donation is made, you can share the donation receipt with the donor.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
