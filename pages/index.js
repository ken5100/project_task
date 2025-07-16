import * as React from 'react';
import Head from 'next/head';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import styles from '@/styles/Home.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
<div className={styles.fullPageWrapper}>
      <div className={styles.container}>
        {/* Navbar */}
      <div className={styles.navbar}>
  <div className={styles.navInner}>
    <div className={styles.logo}>
      <img src="/logo.png" alt="Logo" width={220} height={35} />
    </div>
    <div className={styles.navLinks}>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>News</Button>
      <Button
        variant="text"
        sx={{ color: 'white', display: 'flex', textTransform: 'none' }}
        onClick={handleMenuClick}
      >
        Feature <KeyboardArrowDownIcon fontSize="small" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={handleMenuClose}>Company</MenuItem>
        <MenuItem onClick={handleMenuClose}>Team</MenuItem>
      </Menu>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Pricing</Button>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Sync</Button>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Brands <KeyboardArrowDownIcon fontSize="small" /></Button>
      <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>Blogs </Button>
    </div>
   <div className={styles.authButtons}>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#a855f7', // Purple
      color: 'white',
      textTransform: 'none',
      marginRight: '8px',
      '&:hover': {
        backgroundColor: '#6b21a8', // Darker purple on hover
      },
    }}
  >
    Login
  </Button>
  <Button
    variant="outlined"
    sx={{
      color: 'white',
      borderColor: 'white',
      textTransform: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'white',
      },
    }}
  >
   Free Sign Up
  </Button>
</div>

  </div>
</div>

<div>
  <img src="/Content.png" alt="Hero" className={styles.content01} />
</div>
    <div>
       <img src="/bg-2.png" alt="Hero" className={styles.content02} />
    </div>



      </div>
 <img src="/bg-3.png" alt="Junction" className={styles.junctionImage} />

      <div className={styles.secondContainer}>
  <div className={styles.secondContent}>
    
    <div className={styles.imageRow}>

    <div className={styles.imageWrapper1}>
    <img src="/bg-6.png" alt="Image 1" className={styles.image1} />
  </div>
  <div className={styles.imageWrapper2}>
    <img src="/bg-5.png" alt="Image 2" className={styles.image2} />
  </div>

  </div>

      </div>
</div>
<div className={styles.thirdContainer}>
  <div className={styles.thirdContent}>
    <div className={styles.imageRow}>
      <div className={styles.verticalImageWrapper}>
        <img src="/bg-7.png" alt="Vertical" className={styles.verticalImage} />
      </div>
      <div className={styles.horizontalImageWrapper}>
        <img src="/bg-8.png" alt="Horizontal" className={styles.horizontalImage} />
      </div>
    </div>
  </div>
</div>

<div className={styles.fourthContainer}>
  <div className={styles.fourthContent}>
    <div className={styles.fourthColumn}>
      <img src="/content2.png" alt="Content Heading" className={styles.content03} />
      <img src="/content3.png" alt="Content Paragraph" className={styles.content04} />
      <div className={styles.imageRowPortrait}>
  <img src="/bg-10.png" alt="Image 1" className={styles.portraitImage} />
  <img src="/bg-11.png" alt="Image 2" className={styles.portraitImage} />
  <img src="/bg-12.png" alt="Image 3" className={styles.portraitImage} />
</div>
    </div>

  </div>
</div>

<div className={styles.fifthContainer}>
  <div className={styles.fifthContent}>
   <div className={styles.fifthColumn}>
      <img src="/content4.png" alt="Content Heading" className={styles.content05} />
      <img src="/content5.png" alt="Content Paragraph" className={styles.content06} />
      <img src="/bg-13.png" alt="Image 1" className={styles.fifthImage} />
      </div>
  </div>
</div>
</div>
    </>
  );
}
