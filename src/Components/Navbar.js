import React from 'react'
import myphoto from '../img/myphoto.png';
import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as ImProf from 'react-icons/im';
import * as Cont from 'react-icons/md';
import * as Achive from 'react-icons/gr';
import { useState } from 'react';

function Navbar() {
    const [navToggle, setNavToggle] = useState(false);


    const navClick = () => {
        setNavToggle(!navToggle)
    }
}

export default Navbar;