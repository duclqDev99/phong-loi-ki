import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const AsideMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [isActiveMenu, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  const isActive = (item) => {
    let active = false;
    if (item.slug && location.pathname.indexOf(item.slug) !== -1) active = true;
    item?.children?.forEach((children) => {
      if (location.pathname.indexOf(children.slug) !== -1) active = true;
    });

    return active;
  };

  useEffect(() => {
    if (isActive(item)) {
      setOpen(true);
      setIsActive(true);
    }
  }, []);

  return (
    <>
      <ListItemButton onClick={handleClick} selected={isActiveMenu}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        {item.slug ? (
          <ListItem component='a' href={`/admin${item.slug}`}>
            <ListItemText primary={item.title} />
          </ListItem>
        ) : (
          <ListItemText primary={item.title} />
        )}
      </ListItemButton>
      {item.children && (
        <Collapse in={open}>
          {item.children.map((children, key) => (
            <List component='div' key={key} sx={{ padding: 0 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Circle fontSize='5' />
                </ListItemIcon>
                <ListItem component='a' href={`/admin${children.slug}`}>
                  <ListItemText primary={children.title} />
                </ListItem>
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      )}
    </>
  );
};

AsideMenuItem.propTypes = {
  item: PropTypes.object,
};

export default AsideMenuItem;
