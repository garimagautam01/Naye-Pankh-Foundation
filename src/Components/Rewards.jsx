import React from 'react'

const Rewards = () => {
  return (
    <div className='bg-slate-100 h-full'>
      <div className='flex justify-between'>
        <h2 className='font-bold ml-16 mt-8 text-3xl'>Rewards</h2>
        <h6 className='mr-36 mt-10'><span className='font-bold'>/ General</span> / Rewards</h6>
      </div>


      <div className='flex justify-between my-16 mx-20 '>
        <div className='bg-white w-2/5 rounded-2xl shadow-lg'>
          <div className='flex gap-6'>
            <h2 className='font-bold text-2xl mx-16 my-10'>Star</h2>
            <h6 className='my-12 text-red-600'>(₹1,000 - ₹5,000)</h6>
          </div>
          <hr />
          <div className='mx-10 my-16'>
          <h4 className='py-2'>20% Stipend</h4>
          <h4>Certificate of Completion</h4>
          </div>
        </div>

        <div className='bg-white w-2/5 rounded-2xl shadow-lg'>
          <div className='flex gap-6'>
            <h2 className='font-bold text-2xl mx-16 my-10'>Ninja</h2>
            <h6 className='my-12 text-red-600'>(₹5,000 - ₹15,000)</h6>
          </div>
          <hr />
          <div className='mx-8 my-6'>
          <h4 className='py-2'>20% Stipend</h4>
          <h4 className=''>Certificate of Completion</h4>
          <h4 className='py-2'>LinkedIn recemmendation from head of Fundraising</h4>
          <h4 className=''>Certificate for Crowding Course</h4>
          </div>
        </div>
      </div>

      <div className='flex justify-between my-16 mx-20'>
        <div className='bg-white w-2/5 rounded-2xl shadow-lg'>
          <div className='flex gap-6'>
            <h2 className='font-bold text-2xl mx-16 my-10'>Wizard</h2>
            <h6 className='my-12 text-red-600'>(₹15,000 - ₹30,000)</h6>
          </div>
          <hr />
          <div className='mx-8 my-6'>
          <h4 className='py-2'>20% Stipend</h4>
          <h4>Certificate of Completion</h4>
          <h4 className='py-2'>LinkedIn recemmendation from head of Fundraising</h4>
          <h4>Certificate for Crowding Course</h4>
          <h4 className='py-2'>Social Media Shoutout</h4>
          <h4>Internship Opportunity</h4>
          </div>
        </div>

        <div className='bg-white w-2/5  rounded-2xl shadow-lg'>
          <div className='flex gap-6'>
            <h2 className='font-bold text-2xl mx-16 my-10'>Legend</h2>
            <h6 className='my-12 text-red-600'>(₹30,000 +)</h6>
          </div>
          <hr />
          <div className='mx-4 my-6'>
          <h4 className='py-2'>20% Stipend</h4>
          <h4>Certificate of Completion</h4>
          <h4 className='py-2'>LinkedIn recemmendation from head of Fundraising</h4>
          <h4>Certificate for Crowding Course</h4>
          <h4 className='py-2'>Social Media Shoutout</h4>
          <h4>Internship Opportunity</h4>
          <h4 className='py-2'>Letter Of Recommendation from president of NayePankh</h4>
          <h4>Chance to start NayePankh chapter in your city</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rewards
