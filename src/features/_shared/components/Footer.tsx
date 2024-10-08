import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return null;
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <IconButton
        color="inherit"
        href="https://github.com/itz4blitz/react-screaming-architecture-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color="inherit"
        href="https://discord.gg/8nVCV2M44U"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord />
      </IconButton>
    </Box>
  );
};

export default Footer;
