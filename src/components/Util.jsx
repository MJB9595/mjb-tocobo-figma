import React from 'react'
import { headerData } from '../util/header'
import './styles/Util.scss'

const Util = () => {

  const utilData = headerData.utils
  return (
    <ul className='util-list'>
      {utilData.map((u) => (
        <li key={u.id} className={`util-${u.id}`}>
          <a 
          href={u.href}
          className='icon-link'
          style={{'--svg-url':`url(${u.icon})`}}>
            <img src={u.icon} alt={u.label} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Util