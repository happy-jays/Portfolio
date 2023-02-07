import React from 'react'
import "../App.css";
function Header() {
  return (
    <div className='header'>
       <div className="col col1">
        <h1>HAPPY KUMAR</h1>
        <p>As a Full Stack Developer, I am passionate about creating efficient and scalable web applications that provide a seamless user experience. With a strong foundation in both front-end and back-end development, I have a diverse skill set that allows me to tackle any challenge. I am equipped to bring your project to life. My ability to effectively communicate and collaborate with cross-functional teams ensures that the end result meets both technical and business requirements. I am continuously seeking new challenges and opportunities to further grow my skills and knowledge in the ever-evolving world of web development.</p>
       </div>
       <div className="col col2">
        <img id='image' src="https://img.freepik.com/free-vector/man-working-using-laptop-flat-design_1308-102458.jpg?w=826&t=st=1675714822~exp=1675715422~hmac=1199590196c5a4bdf222299837c341d22c6ec9115cedc80e4100c96769909f7b" alt="" />
       </div>
    </div>
  )
}

export default Header