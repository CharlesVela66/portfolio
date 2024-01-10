import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-16 md:pt-32 pb-20 bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skill</span>
        </h1>
        <div className='w-4/5 mx-auto pt-16 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
                <SkillsItem title="React Developer" year="2014 - 2018"/>
                <SkillsItem title="Java Developer" year="2016 - 2020"/>
                <SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="91" level2="88" level3="80"/>
            </div>
            <div>
                <SkillsItem title="React Developer" year="2014 - 2018"/>
                <SkillsItem title="Java Developer" year="2016 - 2020"/>
                <SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="91" level2="88" level3="80"/>
            </div>
        </div>
    </div>
  )
}

export default Skills