import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Technical Interviews and Coding rounds</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        are now easy to crack. 
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_blue" 
            href='https://play.google.com/store/apps/details?id=com.pixamentory.codealarm'
          />
        </div>
      </div>

      <div className='hidden lg:hidden xl:block'>
        <Image src="/coder_1.svg" alt="coder" width={600} height={600} className=''/>
      </div>
    </section>
  )
}

export default Hero