import { useTranslation } from 'react-i18next'
import React from 'react'

const Sidebar = () => {
    const { t } = useTranslation();
    console.log(t)
  return (
    <div style={{marginTop: "10px"}}>
        <button>{t("home")}</button>
    </div>
  )
}

export default Sidebar