import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const CollectionFilter = ({ title, description }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='collection-options'>
      <div className='options-container'>
        <div className='option'>
          <span
            id='fade-button-category'
            aria-controls={open ? 'fade-menu-category' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            Category
          </span>
          <i className='bi bi-chevron-down'></i>
          <Menu
            id='fade-menu-category'
            MenuListProps={{
              'aria-labelledby': 'fade-button-category',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Category 1</MenuItem>
            <MenuItem onClick={handleClose}>Category 2</MenuItem>
          </Menu>
        </div>

        <div className='option'>
          <span
            id='fade-button-color'
            aria-controls={open ? 'fade-menu-color' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <span>Color</span>
            <i className='bi bi-chevron-down'></i>
          </span>
          <Menu
            id='fade-menu-color'
            MenuListProps={{
              'aria-labelledby': 'fade-button-color',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Color 1</MenuItem>
            <MenuItem onClick={handleClose}>Color 2</MenuItem>
          </Menu>
        </div>

        <div className='option'>
          <span
            id='fade-button-color'
            aria-controls={open ? 'fade-menu-color' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <span>Size</span>
            <i className='bi bi-chevron-down'></i>
          </span>
          <Menu
            id='fade-menu-color'
            MenuListProps={{
              'aria-labelledby': 'fade-button-color',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Size 1</MenuItem>
            <MenuItem onClick={handleClose}>Size 2</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='options-container'>
        <div className='option d-flex-start'>
          <span>Model view</span>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
            />
          </div>
        </div>
        <div className='option'>
          <span>Sort By</span>
          <i className='bi bi-chevron-down'></i>
        </div>
      </div>
    </div>
  );
};

export default CollectionFilter;
