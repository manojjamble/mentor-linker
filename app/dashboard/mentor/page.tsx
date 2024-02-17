// MentorDetailPage.tsx

import React from 'react';
import MentorDetail from './mentorDetail';

const MentorDetailPage: React.FC = () => {
  // Assuming you have mentor data
  const mentorData = {
    name: 'Mentor Name',
    image: 'pic1.jpg',
    role: 'Web Developer',
    phone: '1234567890',
    email: 'mentor@example.com',
    skills: ['React', 'Node.js', 'JavaScript'],
    qualification: 'Bachelor of Science in Computer Science',
    feedback: ['Excellent mentor!', 'Very knowledgeable.'],
  };

  return (
    <div className="h-screen w-screen bg-white p-5 flex items-center justify-center">
      <MentorDetail mentor={mentorData} />
    </div>
  );
};

export default MentorDetailPage;
