import React from 'react';
import InteractiveImg from '../images/image-interactive.jpg';

const AboutPage = () => {
  return (
    <main className="container mx-auto px-3 pb-12">
      <section>       
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img src={InteractiveImg} alt="Interactive"/>
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, modi! Ipsum magni est quisquam laudantium voluptates, quaerat aperiam, cupiditate, id laboriosam molestias ex. Ratione voluptas, rem tempora itaque impedit corrupti necessitatibus totam culpa accusantium.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className='text-3xl mb-4'>Cherche un profil sur Github</h1>
        <div className="join join-vertical w-full bg-neutral">
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion-4" checked="checked" /> 
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content"> 
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content"> 
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content"> 
                <p>hello</p>
              </div>
            </div>
          </div>
      </section>
    </main>
  )
}

export default AboutPage




