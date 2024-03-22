"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>school</li>
        <li>University</li>
      </ul>
    )
  }
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => { setTab(id); })
  }
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image
          src="/images/logo.png"
          width={500}
          height={500}
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Us</h2>
          <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rem doloremque, numquam fuga praesentium incidunt? Enim, maiores quas. Quia nulla doloribus asperiores, ea iste deleniti? Aut, temporibus. Quisquam, debitis error?</p>
          <div className="flex flex-row mt-8">
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}>
              {""}
              Skill{""}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}>
              {""}
              Education{""}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t)=> t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection