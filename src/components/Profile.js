import React from 'react';

function Profile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-picture">
        {/* Make sure this image exists in your public/images folder */}
        <img src="/images/profile.png" alt="Kekeletso Tsilane" />
      </div>
      
      <div className="profile-info">
        <h1>Kekeletso Tsilane</h1>
        <h2>Multimedia & Software Engineering Student</h2>
        
        <p>
          I am a motivated and detail-oriented Multimedia & Software Engineering student with a strong 
          interest in web development, software design, databases, 3D animation, and creative media production.
        </p>
        
        <div className="contact-info">
          <span>Email: florencetsilane13@gmail.com</span>
          <span>Telephone: +266 62044205</span>
          <span>Location: Maseru, Lesotho</span>
          <span>Age: [21]</span>
          <span>Gender: [Female]</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;