import React, { useState } from 'react'
import FrIcon from '../img/france.png'
import EnIcon from '../img/english.png'
import JpIcon from '../img/japan.png'
import i18n from '../i18n';

const langues = [
  { value: "fr", label: "Francais", icon: FrIcon },
  { value: "en", label: "English", icon: EnIcon },
  { value: "jp", label: "Japonais", icon: JpIcon }
];

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    console.log(e.target.img)
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    console.log('Value',e.target.value)
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='absolute top-4 right-8 md:top-24 md:right-20 h-5 w-5'>
      <button onClick={() => setIsOpen((prev => !prev))}>Test
      {!isOpen ? (
        <></>
      ):(
        <div>
        {langues.map((item) => 
          <img onClick={chooseLanguage} value={item.value} src={item.icon}/>
        )}
        </div>
      )
    }
    </button>
    </div>
  )
}

export default Dropdown
