import React, {useState} from "react";
import i18n from '../i18n';

export default function Modal({ onClose}) {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }


  return (
    // backdrop
    <div  className={'fixed inset-0 bg-cadre bg-opacity-30 backdrop-blur-sm flex justify-center items-center'}>
      {/* modal */}
      <div className={'bg-cadre rounded-xl shadow p-12'} defaultValue={selectedLanguage}>
        <select size='3'onChange={chooseLanguage} className="bg-cadre w-28 h-32 text-center text-s appearance-none">  
            <option className="cursor-pointer mb-4 text-text text-xl" onClick={onClose} value="fr">Français</option>
            <option className="cursor-pointer mb-4 text-text text-xl" onClick={onClose} value="en">English</option>
            <option className="cursor-pointer text-text text-xl" onClick={onClose} value="jp">日本語</option>
        </select>
      </div>
    </div>
  )
}