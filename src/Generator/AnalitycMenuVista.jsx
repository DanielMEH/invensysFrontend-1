import React from 'react'
import { Link, NavLink,  } from 'react-router-dom'
export const AnalitycMenuVista = () => {
  return (
      <>
          <div className="items_Links">
              <ul>
                <li>
                    <NavLink><span>Link 1</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 2</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 3</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 4</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 5</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 6</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 7</span></NavLink>
                </li>
                <li>
                    <NavLink><span>Link 8</span></NavLink>
                </li>
              </ul>
      </div>
      </>
  )
}
