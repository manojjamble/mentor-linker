// MentorDetail.tsx

import React from 'react';
import Image from 'next/image';

interface MentorDetailProps {
  mentor: {
    name: string;
    image: string;
    role: string;
    phone: string;
    email: string;
    skills: string[];
    qualification: string;
    feedback: string[];
  };
}

const MentorDetail: React.FC<MentorDetailProps> = ({ mentor }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Mentor Image */}
      <div className="rounded-full h-[150px] w-[150px]  border-2 border-zinc-300">
        <Image
          src={`/profile/${mentor.image}`}
          alt="mentorship"
          width={150}
          height={150}
          className="rounded-full object-cover w-[150] h-[150] "
        />
      </div>

      {/* Mentor Details */}
      <div className="text-center">
        <h1 className="text-lg font-bold">{mentor.name}</h1>
        <p className="text-lg font-bold bg-blue-200 rounded-xl w-44 text-center text-blue-600">
          {mentor.role}
        </p>
        <p>{mentor.phone}</p>
        <p className="text-blue-700">{mentor.email}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-bold">Skills:</h2>
        <ul>
          {mentor.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Qualification */}
      <div>
        <h2 className="text-lg font-bold">Qualification:</h2>
        <p>{mentor.qualification}</p>
      </div>

      {/* Feedback or Reviews */}
      <div>
        <h2 className="text-lg font-bold">Feedback/Reviews:</h2>
        <ul>
          {mentor.feedback.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MentorDetail;
