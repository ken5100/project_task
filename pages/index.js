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

<div className={styles.headingWrapper}>
  <div className={styles.textGroup}>
    <h1 className={styles.content01Heading}>
      <span>YOUR MUSIC</span><br />
      <span>OUR MISSION</span>
    </h1>

    <p>
      Distribute your music to top platforms, grow your <br /> audience,
      and get the recognition you deserve.
    </p>

   <div className={styles.tagline}>
  <span className={styles.emoji}>🚀</span>
  <span className={styles.tag}>Music Distribution</span>
  <span className={styles.pipe}>|</span>
  <span className={styles.emoji}>🛡️</span>
  <span className={styles.tag}>Marketing</span>
  <span className={styles.pipe}>|</span>
  <span className={styles.emoji}>📞</span>
  <span className={styles.tag}>Artist & Label Solutions</span>
</div>


    <button className={styles.ctaButton}>Start Free Now</button>
  </div>
</div>



    <div>
       <img src="/bg-2.png" alt="Hero" className={styles.content02} />
    </div>



      </div>
 <img src="/bg-3.png" alt="Junction" className={styles.junctionImage} />

     <div className={styles.secondContainer}>
  <div className={styles.secondContent}>
    <div className={styles.imageRow}>
      
      {/* LEFT SIDE: Headings */}
      <div className={styles.textColumn}>
  <h6>Our MISSION</h6>
  <h1>
    Empowering Independent Artists & <br />
    Labels to Rule the Global Stage
  </h1>

  <p>
    We help artists go live fast — your music hits 100+ stores like Spotify & Apple Music
    within 48 hours. You keep 100% of your rights, always. No cuts, no control games.
    And if you need help, real human support is just a call or email away — replies
    within 24 hours. Simple. Fast. Artist-first.
  </p>

<div className={styles.highlights}>
  🚀 Faster Music Delivery <span className={styles.pipe}>|</span>
  🛡️ Keep your 100% Rights <span className={styles.pipe}>|</span>
  📞 Real Human Support
</div>
<br></br>
<button className={styles.ctaButton}>Get Started</button>

</div>


      {/* RIGHT SIDE: Image */}
      <div className={styles.imageWrapper}>
        <img src="/bg-5.png" alt="Image" className={styles.image2} />
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
        {/* <img src="/bg-8.png" alt="Horizontal" className={styles.horizontalImage} /> */}

        <h6>Why Choose Us</h6>
        <h1>Artist-First Philosophy</h1>
        <p>In short, Maheshwari Visuals isn’t just a distributor—it’s a creative ecosystem built to<br></br>
           empower, elevate, and evolve with the artist.</p>

           <p className={styles.features}>
  🛠️Powerful Tools & Dashboard<span>|</span>🚀Marketing & Exposure<span>|</span>🧬Community& <br/>
  Collaboration
</p>
<button className={styles.ctaButton}>Get Started</button>


      </div>
    </div>
  </div>
</div>

<div className={styles.fourthContainer}>
  <div className={styles.fourthContent}>
    <div className={styles.fourthColumn}>
      
      <h1>Our Services</h1>
      <p>Everything You Need to Take Your Music Further.</p>
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
     
    <h1 className={styles.fifthHeading}>
  Trusted by 200k<span className={styles.plusSign}>+</span> Artists & Labels Globally
</h1>
<p className={styles.fifthParagraph}>We have roaster full of Artist and Labels across the Globe. We are here to get you collaborations with artists, fulfilling the <br/>
  needs. Our roaster algorithim will help you to get collaboration according to your taste in Music.</p>

      <img src="/bg-13.png" alt="Image 1" className={styles.fifthImage} />
      </div>
  </div>
</div>
</div>
    </>
  );
}
