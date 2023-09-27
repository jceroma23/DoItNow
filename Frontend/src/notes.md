  <div className='w-full h-auto flex mx-auto justify-between'>
      {/* Icon Title */}
          <div>
            <img className='w-48' src={navLogo} alt="NavLogo" />
          </div>
      {/* Login Register Button */}
          <div className='flex space-x-5 mx-3 mb-3'>
            <SecondaryButton text='Login'/>
            <PrimaryButton text='Register' />
          </div>
      </div>
      <div className='w-auto h-auto flex justify-center flex-wrap rounded-md'>
        <div className='mt-20'>
            <h1 className='text-5xl text-emerald-950 font-bold'>Where Task Find There Time</h1>
            <h3 className='text-2xl text-emerald-800 mt-5 w-1/3 text-center'>Feeling overwhelmed by tasks and deadlines? DoItNow is your simple and free solution to stay in control of your to-do lists.
            <PrimaryButton text='Get Started' />  
            </h3>
        </div>
      </div>