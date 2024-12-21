import { Button } from "./ui/moving-border"
import { Spotlight } from "./ui/Spotlight"
import Link from "next/link"
const Sec1 = () => {


  return (
    <>
    <div className='pt-[3rem]'>
        <h1 className='text-[3rem] text-gray-300 pl-[2rem]'>MelodyHub</h1>
       
        <div className="flex flex-col justify-center items-center m-auto h-[80vh] gap-[3rem] w-fit">
          <Spotlight
          className="-top-40 left-10 md:left-60 md:-top-20"
          fill="white"
        />
          <h1 className="text-[5rem] font-semibold text-gray-300 ">Master the Art of Music</h1>
          <p className="w-[50%] text-center text-[2rem]" >
            Dive into our comprehensive music courses and transform you musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
          </p>
          <Link href={"/course"}>
            <Button
          borderRadius="1.75rem"
          className="bg-black text-[2rem] w-fit "
        >
          Explore course
        </Button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Sec1
