import { AppBar, Toolbar, styled, InputBase, Box, IconButton } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import '../App.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Avatar from '@mui/material/Avatar';

const Header = ({ toggleDrawer }) => {



const searchbar=()=>{

 const searchInput= document.getElementById('search').value;



}



  return (
    <StyledAppBar  >
      <StyledToolbar>
      <LogoWrapper>
        <IconButton onClick={toggleDrawer}>
        <MenuIcon color="action"   />
        </IconButton>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
          alt="logo"
          style={{ width:"70%", marginLeft:10 }}
        />
       
        </LogoWrapper>
        
        <SearchRapper>
          <SearchRoundedIcon color="action"/>
          <InputBase placeholder="Search mail"
          id="search"
          name='search'
          type="text"
          onChange={searchbar}
          />
          <Tune color="action" />
        </SearchRapper>

        <IconsWrapper>
          <Icon>
            <IconButton>
          <HelpOutlineOutlined color="primary"  />
          </IconButton>
          <IconButton>
          <SettingsOutlined color="action"  />
          </IconButton>
        
          <IconButton>
          <AppsOutlined color="action"  />
          </IconButton>
          <IconButton  >
          {/* <AccountCircleOutlined color="action" /> */}
          <Avatar sx={{width:36,height:36,fontSize:14,background:'green'}}>S</Avatar>
          </IconButton>
          </Icon>
        </IconsWrapper>
        
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
  height:'64px !important',
  position:"static",
  flexGrow:1,
  // width: "100vw ",

 

});
const StyledToolbar=styled(Toolbar)({
    // width:"100%",
    background: "#f5f5f5",
    display:"grid",
    gridTemplateColumns:"15% auto 20%"

})

const SearchRapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 20,
  borderRadius: 8,
  marginRight:8,
  
  // width:'100% !important',
 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 10px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
    
  },
});

const IconsWrapper = styled(Box)({

  display: "grid",
  // justifyContent: "center",
  width:"70%",
  gridTemplateRows:"repeat(4,40)",
  background: "#f5f5f5",
  marginLeft:'20%',
 
  " & > *":{
   
   
    
  }
});

const LogoWrapper=styled(Box)({
        display:'flex',
        alignItems:'center'
})

const Icon=styled(Box)({
   display:'flex',
   justifyContent:'space-between'


})