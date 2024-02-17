import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Card from './card'


type Props = {}

interface MentorData {
  name: string,
  image: string,
  role: string,
  phone: string,
  email: string,
}

const DashboardPage = (props: Props) => {

  const duppyMentordata = [
    {
      name: "Murtuza Kapasi",
      image: "pic1.jpg",
      role: "Web Developer",
      phone: "1234567890",
      email: "murtuza@gmail.com",
    },
    {
      name: "Swapnil Kapale",
      image: "pic2.jpg",
      role: "Frontend Developer",
      phone: "1234567890",
      email: "sk@gmail.ds",
    },
    {
      name: "Daniel White",
      image: "pic3.webp",
      role: "Cybersecurity Analyst",
      phone: "1234567890",
      email: "daniel.white@example.com",
    },
    {
      name: "Mahesh Kakde",
      image: "pic4.jpg",
      role: "Full Stack Developer",
      phone: "1234567890",
      email: "mahif@gmail.as",
    },
    {
      name: "John Doe",
      image: "pic5.avif",
      role: "UI/UX Designer",
      phone: "1234567890",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      image: "pic6.jpg",
      role: "Backend Developer",
      phone: "1234567890",
      email: "jane.smith@example.com",
    },
    {
      name: "Alex Johnson",
      image: "pic7.avif",
      role: "Data Scientist",
      phone: "1234567890",
      email: "alex.johnson@example.com",
    },
    {
      name: "Emily Davis",
      image: "pic8.avif",
      role: "Mobile App Developer",
      phone: "1234567890",
      email: "emily.davis@example.com",
    },
    {
      name: "Chris Miller",
      image: "pic9.avif",
      role: "DevOps Engineer",
      phone: "1234567890",
      email: "chris.miller@example.com",
    },
    {
      name: "Sophia Wilson",
      image: "pic10.jpg",
      role: "Machine Learning Engineer",
      phone: "1234567890",
      email: "sophia.wilson@example.com",
    },
   
  ];
  



  return (
    <div className='h-screen w-screen bg-white p-5 flex flex-col overflow-x-hidden'>
      <div className="w-full h-28 rounded-2xl shadow-2xl bg-zinc-800 text-white pl-10 flex items-center gap-4" >
        <Avatar className='h-14 w-14 border-2 border-white'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className='text-xl '>
          Swapnil Kapale
        </h1>

        <button className='flex gap-2 items-center ml-auto mr-10'>
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
              <path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0" />
              </path>
              <path stroke-dasharray="12" stroke-dashoffset="12" d="M9 12h11.5" opacity="0">
                <set attributeName="opacity" begin="0.5s" to="1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" />
              </path>
              <path stroke-dasharray="6" stroke-dashoffset="6" d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5" opacity="0">
                <set attributeName="opacity" begin="0.7s" to="1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" />
              </path>
            </g>
          </svg>
          Logout
        </button>
      </div>
      <div className='p-5 w-full h-auto'>
        <h1 className='font-bold text-3xl'>Mentors <span className='text-violet-500'>100</span></h1>
      </div>
      <div className='w-full h-auto '>

        {/* displaying mentor cards */}
        <div className=' flex flex-wrap w-auto h-auto '>
          {duppyMentordata.map((mentorData, index) => (
            <Card key={index} mentorData={mentorData} />
          ))}
        </div>


      </div>



    </div>
  )
}

export default DashboardPage