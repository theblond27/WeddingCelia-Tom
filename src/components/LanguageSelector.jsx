// import React, {useState} from "react";
// import i18n from '../i18n';


// const LanguageSelector = () => {
    
//     const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

//     const chooseLanguage = (e) => {
//         e.preventDefault();
//         i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
//         setSelectedLanguage(e.target.value);
//         console.log('Value',e.target.value)
//     }
   

//     return (
//         <select defaultValue={selectedLanguage} onChange={chooseLanguage} className="appearance-none">  
//             <option value="fr">Français</option>
//             <option value="en">English</option>
//             <option value="jp">日本語</option>
//         </select>
//     );
// };

// export default LanguageSelector;