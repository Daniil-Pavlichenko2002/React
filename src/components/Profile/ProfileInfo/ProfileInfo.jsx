import React from 'react';
import s from "./ProfileInfo.module.css"



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://zakazposterov.ru/fotooboi/z/fotooboi-e-67859-tropicheskiy-rayskiy-plyaj-s-belim-peskom-i-kokosovimi-paljmam-zakazposterov-ru_z.jpg' />
      </div>
      <div className={s.discriptionBlock}>
        ava + discription
      </div>

    </div>
  )
}

export default ProfileInfo;