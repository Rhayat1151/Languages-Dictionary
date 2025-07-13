// import React from 'react';
// import './header.css';
// import TextField from '@mui/material/TextField';
// import { ThemeProvider, createTheme  } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MenuItem from '@mui/material/MenuItem';
// import categories from '../../data/category'; 
// const Header = ({ category, setCategory, word, setWord, LightMode }) => {

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: LightMode ? '#fff' : '#000',
//     },
//     mode: LightMode ? 'light' : 'dark',
//   },
// });


// const handlechange = (language) => {
//   setCategory(language);
//   setWord(""); 
// }


//   return (
//     <div className='header'>
//       <span className='header-title'>Word-Hunt</span>
//       <div className='inputs'>
//             <ThemeProvider theme={darkTheme}>
//       <CssBaseline />

//                 <TextField 
//                 className='search' 
//                 label="Search a word" 
//                 value={word}
//                 onChange={(e) => setWord(e.target.value)}
//                 />


//                 <TextField
//                   className='select'
//                   select
//                   label="Language"
//                   defaultValue={category}
//                   onChange={(e) => handlechange(e.target.value)}
                  
//                 >

//           {
//             categories.map((option) => (
//               <MenuItem key={option.label} value={option.label}>
//                 {option.value}
//               </MenuItem>
//             ))
//           }
          
//             <MenuItem >
//               English
//             </MenuItem>
          
//         </TextField>

//     </ThemeProvider>

//       </div>
//       </div>
//   );
// };

// export default Header;


import React from 'react';
import './header.css';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import categories from '../../data/category'; 

const Header = ({ category, setCategory, word, setWord, LightMode }) => {

const darkTheme = createTheme({
  palette: {
    primary: {
      main: LightMode ? '#1976d2' : '#90caf9', // Use proper colors for both modes
    },
    mode: LightMode ? 'light' : 'dark',
  },
});

const handlechange = (language) => {
  setCategory(language);
  setWord(""); 
}

  return (
    <div className='header'>
      <span className='header-title'>Word-Hunt</span>
      <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
      <CssBaseline />

                <TextField 
                className='search' 
                label="Search a word" 
                value={word}
                onChange={(e) => setWord(e.target.value)}
                />

                <TextField
                  className='select'
                  select
                  label="Language"
                  defaultValue={category}
                  onChange={(e) => handlechange(e.target.value)}
                  
                >

          {
            categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))
          }
          
            <MenuItem >
              English
            </MenuItem>
          
        </TextField>

    </ThemeProvider>

      </div>
      </div>
  );
};

export default Header;