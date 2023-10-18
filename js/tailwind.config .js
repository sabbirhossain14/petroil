tailwind.config = {
    theme: {
      extend: {
        colors: {
          headerbg: '#282828',
          whitebg: '#FFF',
          other:'#5C6A92',
          borderbg:'#FFB800',
          maincolor:'#F40404',
          textblack:'#000000',
          p_text:'#6C6C6C',
          aboutbg:'#F0F0F0',
          footerbg:'#1F1F1F',
          
        },
        maxWidth: {
          'container': '1144px',
        },
        fontFamily: {
          poppins: " 'Poppins', sans-serif",
        },  
        backgroundImage: {
          'banner': "linear-gradient( #00000099 60%, rgba(0, 0, 0, 0.60) ),url('./images/banner.jpg')",
          overlay: 'linear-gradient( #00000099 60%, rgba(0, 0, 0, 0.60) )',
        }
      }
    }
  }