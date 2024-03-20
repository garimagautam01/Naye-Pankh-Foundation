import React from 'react'
import Footer from './Footer'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Navbar from './Navbar';
import { WhatsappIcon } from 'react-share';
import { WhatsappShareButton } from 'react-share';
import { useAuth0 } from "@auth0/auth0-react";
const Content = () => {
  const { loginWithRedirect,logout ,user, isAuthenticated, isLoading  } = useAuth0();

  return (
    <>
      <div >
        <div className=''>
          <div className='bg-slate-200 flex flex-col'>
            <div className='flex justify-between '>
              <h2 className='font-bold text-2xl mt-8 ml-10'>Dashboard</h2>
              <h4 className='mr-12 mt-8'> / <span className='font-bold'>General</span> / Dashboard</h4>
            </div>
            <div className=''>
              <div className='flex flex-col bg-white mx-10 my-10 rounded-xl'>

                <div class="relative h-screen">
                  <img src="src/images/img.jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center opacity-75 rounded-t-xl" />
                  <div class="absolute inset-0 bg-black opacity-50 rounded-t-xl"></div>
                  <div class="absolute inset-0 flex flex-col justify-start items-start p-4 bg-black bg-opacity-40 rounded-t-xl text-left">
                    <div className='mt-72 ml-80'>
                      {
                        isAuthenticated?(<h2 class="text-red-600 font-bold text-5xl">Hello {user.name}</h2>):(<h2 class="text-red-600 font-bold text-5xl">Please signup</h2>)
                      }
                      
                      <h4 class="text-white mt-6 italic">Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.</h4>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between relative'>
                  <div className='ml-40 mt-40'>
                    <div className=''>
                      <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbarWithChildren value={66}>
                          <h3 className='font-bold text-red-600'>Goal Achieved</h3>
                          <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong className='font-bold mt-2'>66%</strong>
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                    <div className='mt-12 ml-16'>
                      <h3 className='font-bold text-red-600'>Total Goal</h3>
                      <h3 className='ml-2 font-bold'>₹3000</h3>
                    </div>
                  </div>
                  <div className='mt-20 mb-6 mr-32'>
                    <div>
                      <h3 className='ml-24 font-bold text-red-600'>Level Achieved : <span className='text-black'>Star</span></h3>
                      <div className='w-96 h-1.5 bg-slate-300 rounded-xl mt-6'></div>
                    </div>
                    <div className='mt-10 flex justify-between'>
                      <button className="ml-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rewards</button>
                      <button className="mr-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate Here</button>
                    </div>
                    <h5 className='mt-4 ml-20'>Unlock <span className='font-bold'>Ninja Level</span> at 5000</h5>
                    <div className='mt-8'>
                      <h3 className='font-bold text-red-600 mt-4 ml-24'>Time Left: <span className='text-black'>29 Days Left</span></h3>
                      <div className='w-96 h-1.5 bg-slate-300 rounded-xl mt-8'></div>
                      <h3 className=' ml-24 text-red-600 font-bold mt-6'>Reference Code: <span className='text-black'>gari9024</span></h3>
                    </div>
                    <button className="ml-36 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Here</button>
                  </div>
                </div><hr />
                <WhatsappShareButton
                  url="https://www.whatsapp.com/"
                  title="sharing content"
                  className="ml-16 mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <WhatsappIcon size={32} round={true} logoFillColor="white" />
                  <span>Share On WhatsApp</span>
                </WhatsappShareButton>

              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Content 
