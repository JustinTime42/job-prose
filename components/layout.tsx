import React from 'react'
import {AppBar, Button,  Toolbar} from '@mui/material'
import { handleSignOut } from '@/utils/firebase';

export default function Layout({
    children,
  }: {
    children: React.ReactNode,
  }) {
  return(
    <div>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{backgroundColor:"grey"}}>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </Toolbar>        
      </AppBar>
      {children}
    </div>
  );
}

  