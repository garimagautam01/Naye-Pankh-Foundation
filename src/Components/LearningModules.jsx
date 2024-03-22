import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const LearningModules = () => {

  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (questionIndex) => {
    setShowAnswer(prevState => ({
      ...prevState,
      [questionIndex]: !prevState[questionIndex]
    }));
  };

  return (
    <div className='bg-slate-100 h-full'>
      <div className=''>
        <div className='flex justify-between'>
          <h2 className='font-bold text-2xl mt-20 ml-16'>Crowdfunding 101- Learning Modules</h2>
          <h6 className='mt-8 mr-36'> <span className='font-bold '>/ General</span> / Crowdfunding 101 - Learning Modules</h6>
        </div>
        <h3 className='font-bold text-slate-400 ml-16 mt-16 text-lg'>Hello Changemaker, Welcome to Crowdfunding 101!</h3>
        <p className='mt-2 ml-16 mr-32'>We have curated a few learning modules to give you a deeper understanding of being a fundraiser. By the end of these modules, you will be a certified crowdfunding expert. Please Note: Taking assignments at the end of each chapter is mandatory. You can only move to chapter 2 after finishing the assignment at the end of chapter 1.
        </p>
      </div>

      <div className='mt-10'>
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className='w-full mb-4'>
            <div
              className='font-bold w-5/6 h-16 pt-5 pl-8 bg-white mx-auto'
              onClick={() => toggleAnswer(index)}
              style={{ cursor: 'pointer', backgroundColor: showAnswer[index] ? '#ffffff' : 'white' }}
            >
              <div className='mt-4'>
                <h4 style={{ margin: 0 }}>chapter {index + 1}: How it enables ideas to take root in society</h4>
              </div>
            </div>
            {showAnswer[index] && (
              <div className='w-5/6 h-auto pt-5 pl-8 bg-white mx-auto'>
                <p>
                  {/* Your answer content goes here */}
                  <Container>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        title="YouTube video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Container>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningModules;
