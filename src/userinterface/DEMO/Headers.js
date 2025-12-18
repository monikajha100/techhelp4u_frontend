import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [popOpen, setPopOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const options = [
    { label: 'Home', path: '/' },
  { label: 'Workshop', path: '/Workshop' },
    { label: 'Event', path: '/Event' },
    { label: 'Team', path: '/Team' },
    { label: 'About', path: '/About' },
     { label: 'Blog', path: '/Bloga' },
    { label: 'Contact', path: '/Contact' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
            <img src="/techhelp4U.jpg" alt="logo" style={{ width: 80, marginRight: 0 }} />
            <Box
              sx={{
                fontWeight: 700,
                fontSize: '1.75rem',
                color: '#2563eb',
                lineHeight: 1.75,
                display: 'inline-block',
              }}
            >
              TECH
              <Box component="span" sx={{ color: '#111827' }}>
                help4U
              </Box>
            </Box>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {options.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{ color: '#000' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
           {isMobile && (
              <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon style={{ color: '#000' }} />
              </IconButton>
            )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {options.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Popup open={popOpen} setClose={setPopOpen} />
    </Box>
  );
}
