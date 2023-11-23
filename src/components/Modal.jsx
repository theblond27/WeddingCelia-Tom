import React, {useState} from "react";
import i18n from '../i18n';

export default function Modal({ open, onClose, children}) {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        console.log('Value',e.target.value)
    }


  return (
    // backdrop
    <div  className={'mt-80 flex justify-center items-center'}>
      {/* modal */}
      <div className={'bg-cadre rounded-xl shadow p-12'} defaultValue={selectedLanguage} onChange={chooseLanguage}>
        <select size="3" onChange={chooseLanguage} className="bg-cadre mt-">  
            <option onClick={onClose} value="fr">Francais</option>
            <option onClick={onClose} value="en">English</option>
            <option onClick={onClose} value="jp">Japan</option>
        </select>
      </div>
    </div>
  )
}