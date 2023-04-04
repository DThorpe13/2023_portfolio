import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("toggled")
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log("closed menu")
    };
    return (
        <div className='nav-bar'>
            <a href='/' className='nav-link'>Home</a>
            <a href='/about' className='nav-link'>About Me</a>
            <a href='/skills' className='nav-link'>Skills</a>
            <a href='/projects' className='nav-link'>Projects</a>
            <a href='contact' className='nav-link'>Contact</a>
            <MenuIcon
                className='hamburger'
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
            </MenuIcon>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 40,
                            height: 40,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Link href="/" className='hamburger-links'>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/about" className='hamburger-links'>About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/skills" className='hamburger-links'>Skills</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/projects" className='hamburger-links'>Projects</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link href="/contact" className='hamburger-links'>Contact</Link>
                </MenuItem>

            </Menu>
            <Outlet />
        </div>
    )
}


