import React from 'react'
import WelcomeMsg from '@/components/dashboard/WelcomeMsg'
const page = () => {
  return (
    <>
      <div>
        <WelcomeMsg />
      </div>
      <h1 className='text-2xl font-bold'>This is the Main Dashboard Page. </h1>
    </>
  );
}

export default page