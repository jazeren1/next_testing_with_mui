import * as React from 'react';
import Button from 'node_modules/@mui/material/Button';
import Menu from 'node_modules/@mui/material/Menu';
import MenuItem from 'node_modules/@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <><div>
          <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
          >
              Home
          </Button>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                  'aria-labelledby': 'basic-button',
              }}
          >
              <MenuItem onClick={handleClose}>Home 1</MenuItem>
              <MenuItem onClick={handleClose}>Home 2</MenuItem>
              <MenuItem onClick={handleClose}>Home 3</MenuItem>
          </Menu>
      </div><div>
              <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >
                  Dashboard
              </Button>
              <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                      'aria-labelledby': 'basic-button',
                  }}
              >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
          </div></>
  );
}