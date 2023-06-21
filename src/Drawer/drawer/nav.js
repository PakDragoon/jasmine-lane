import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Bar from './appbar'

export default function Nav({open, drawOpen}) {

  return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={drawOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Bar />
      </Toolbar>
  );
}
