import Image from "next/image";

interface ExploreProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const ExploreSite = ({ backgroundImage, title, subtitle, peopleJoined }: ExploreProps) => {
  return (
    <div className={`h-full w-full ${backgroundImage} bg-scale-50 bg-center bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
     </div>
    </div>
  )
}

const Explore = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <ExploreSite 
          backgroundImage="bg-bg-img-3"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Ready to Explore</strong> the World of Coding?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Embarking on your coding journey is an exciting adventure! With algorithms as your compass, CodeAlarm is here to guide you every step of the way.
          </p>
          <Image 
            src="/code.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Explore