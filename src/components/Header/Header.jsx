
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Search, StyledInputBase } from './HeaderStyled';

export const Header = ()=>{return(<Box>
    <AppBar position="static"

      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
    >
       <Typography
            variant="h6"
            noWrap
            component="div" 
            sx={{
              fontFamily: ['Rubik Wet Paint, sans-serif'].join(','),
              color: 'blue',
              fontSize: '42px',
            }}

          >
            <NavLink style={{ fontSize: '42px', textDecoration: 'none' }} to="/">Filmster</ NavLink>
          </Typography>

      <form>
        <Box sx={{ display: 'flex' }}>
          <Button type='submit' variant="contained" endIcon={<SearchIcon />}>search</Button>
          <Search>
            <StyledInputBase
              placeholder="Search film…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </form>
    </AppBar>
  </Box>)}