import React, {useState} from "react";
import i18n from '../i18n';

export default function Modal({ onClose }) {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        onClose();
    }


  return (
    // backdrop
    <div  className={'fixed inset-0 bg-cadre bg-opacity-30 backdrop-blur-sm flex justify-center items-center'}>
      {/* modal */}
      <div className={'bg-cadre rounded-xl shadow p-12 grid'} defaultValue={selectedLanguage} >
        <button className="cursor-pointer mb-4 text-text text-xl" onClick={chooseLanguage} value="fr">Français</button>
        <button className="cursor-pointer mb-4 text-text text-xl" onClick={chooseLanguage} value="en">English</button>
        <button className="cursor-pointer text-text text-xl" onClick={chooseLanguage} value="jp">日本語</button>
      </div>
    </div>
  )
}