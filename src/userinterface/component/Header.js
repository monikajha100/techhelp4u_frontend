import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Link as MuiLink } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom'; // <-- React Router Link
import DrawerComponent from './DrowerComponent';

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const pages = [
    { name: 'Home', path: '/Homepage' },
    { name: 'blog', path: '/Blog' },
    { name: 'Contact', path: '/Contact' },
     { name: 'About', path: '/About' },
      { name: 'Team', path: '/Team' },
  ];

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'transparent' }}>

     <AppBar
  position="Fixed"
  elevation={0}
  sx={{
    backgroundColor: 'transparent',
    boxShadow: 'none',
    backdropFilter: 'blur(4px)', // Optional: transparent glass effect
  }}
>

        <Toolbar sx={{minHeight:90}}>
          {/* Left Side: Logo + Menu Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop:30,marginLeft:8 }}>
            {matches ? (
              <MenuIcon
                onClick={handleOpenDrawer}
                style={{ cursor: 'pointer', color: '#000', marginRight: 3 }}
              />
            ) : null}

            <img src="/techhelp4u.jpg" alt="logo" style={{ width: 80}} />

            <div
              style={{
                fontWeight: 700,
                fontSize: 24,
                color: '#000',
                marginLeft: 5,
              }}
            >
              <span className="text-3xl font-bold text-blue-600">
                Tech<span className="text-gray-900 dark:text-white">Help4U</span>
              </span>
            </div>
          </div>

          {/* Center Menu Buttons */}
          {!matches && (
            <div
  style={{
    marginLeft: 90,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    gap: 20,
    marginTop: 35,
  }}
>
  {pages.map((page) => (
    <Button
  key={page.name}
  component={Link}
  to={page.path}
  style={{
    textTransform: 'capitalize',
    color: '#fff', // original white color
    fontSize: 16,
    fontWeight: 600,
    fontFamily: `"ui-sans-serif", "system-ui", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif"`,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#1E40AF')} // hover
  onMouseLeave={(e) => (e.target.style.color = '#fff')}    // leave = back to white
>
  {page.name}
</Button>

  ))}
</div>

          )}

          {/* Right Side Buttons */}
          <div
            style={{
              width: 200,
              display: 'flex',
              justifyContent: matches ? 'flex-end' : 'space-between',
              alignItems: 'center',
              marginRight:90,
              marginTop:30
            }}
          >
            {!matches && (
              <MuiLink
                href="#"
                underline="none"
                style={{
                 width: 100,
    height: 45,
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 600,
 marginTop:20,
    color: '#fff',
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
                }}
              >
                sign up
              </MuiLink>
            )}
            {matches ? (
              <AccountBoxIcon style={{ fontSize: 35, color: '#b03a84' }} />
            ) : (
              <Button
  style={{
    width: 100,
    height: 45,
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 600,
    background: '#1E40AF',
    color: '#fff',
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
  }}
>
  Login
</Button>

            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <DrawerComponent
        options={pages}
        open={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Box>
  );
}
