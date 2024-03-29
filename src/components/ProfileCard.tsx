
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiFilePaper2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function ProfileCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-full p-5 bg-[#4B9DAF] sm:rounded-lg sm:mt-10 gap-5 ">
        
        {/* Image */}
        <div className="w-fit h-fit">
          <img 
            src="https://media.licdn.com/dms/image/D4D03AQFLrF9-mfX7eg/profile-displayphoto-shrink_200_200/0/1700491276122?e=1715817600&v=beta&t=gUGA8TyK34MZ12fu_Rw2yQ2I3FLWcdiZhPde6lvmCEg" 
            alt="profile Image" 
            width={400}
            height={400}
            className="rounded-lg sm:rounded-full object-cover max-w-full max-h-full" />            
        </div>

        <div className="flex flex-col max-h-full max-w-full justify-between p-5 gap-3 bg-[#2D6F7D] rounded-xl text-[#FFFFFF] text-wrap">
          <div>
            <h2 className=" text-3xl font-bold">Tollo, Aj R.</h2>
            <h3>BS Computer Science Student</h3>
          </div>  
            <p className=' text-justify'>
              I'm a Computer Science student and full-stack developer with a strong passion for Graphics, Game, Bot, and Web/App development. 
            </p>
        </div>

        {/* Link */}
        <div className="p-2 bg-[#2D6F7D] rounded-xl text-[#FFFFFF] w-full flex flex-row sm:flex-col justify-around gap-5 sm:w-auto">
          <Link target="_blank" to={"https://github.com/khesir"}> <FaGithub size={40}/></Link>
          <Link target="_blank" to={"https://www.linkedin.com/in/aj-tollo-bab562234/"}><FaLinkedin size={40}/></Link>
          <Link target="_blank" to={"#"}><RiFilePaper2Line size={40}/></Link>
        </div>
        
      {/* Buttons */}
      </div>
  )
}
