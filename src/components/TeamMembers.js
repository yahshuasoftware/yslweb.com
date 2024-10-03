import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'; // Example icons, use appropriate ones

const teamMembers = [
  {
    name: 'John P. Haight',
    role: 'Web Designer',
    imgSrc: 'team-1.jpg',
    socialLinks: {
      twitter: 'https://freewebsitecode.com/',
      facebook: 'https://facebook.com/freewebsitecode/',
      linkedin: 'https://freewebsitecode.com/',
      instagram: 'https://freewebsitecode.com/',
      youtube: 'https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos'
    }
  },
  {
    name: 'David R. Bernard',
    role: 'Web Developer',
    imgSrc: 'team-2.jpg',
    socialLinks: {
      twitter: 'https://freewebsitecode.com/',
      facebook: 'https://facebook.com/freewebsitecode/',
      linkedin: 'https://freewebsitecode.com/',
      instagram: 'https://freewebsitecode.com/',
      youtube: 'https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos'
    }
  },
  {
    name: 'Dana A. Thomas',
    role: 'App Designer',
    imgSrc: 'team-3.jpg',
    socialLinks: {
      twitter: 'https://freewebsitecode.com/',
      facebook: 'https://facebook.com/freewebsitecode/',
      linkedin: 'https://freewebsitecode.com/',
      instagram: 'https://freewebsitecode.com/',
      youtube: 'https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos'
    }
  },
  {
    name: 'Ava M. Proctor',
    role: 'App Developer',
    imgSrc: 'team-4.jpg',
    socialLinks: {
      twitter: 'https://freewebsitecode.com/',
      facebook: 'https://facebook.com/freewebsitecode/',
      linkedin: 'https://freewebsitecode.com/',
      instagram: 'https://freewebsitecode.com/',
      youtube: 'https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos'
    }
  }
];

const Team = () => {
  return (
    <section className="team py-16 bg-white px-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 px-28">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h3>
          <p className="text-lg text-gray-600">
          Discover the exceptional talent and passion driving Yahshua Software Ltd. Our team is dedicated to delivering exceptional results for your business.
          </p>
        </header>

        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="card bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#">
                  <img src={member.imgSrc} alt={member.name} className="w-full h-f object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                          <FaTwitter size={20} />
                        </a>
                      )}
                      {member.socialLinks.facebook && (
                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                          <FaFacebook size={20} />
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">
                          <FaLinkedin size={20} />
                        </a>
                      )}
                      {member.socialLinks.instagram && (
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500">
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {member.socialLinks.youtube && (
                        <a href={member.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600">
                          <FaYoutube size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
