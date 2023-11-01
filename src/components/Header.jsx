import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import '../App.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="static" sx={{flexGrow: 1}}>
      <StyledToolbar>
      <LogoWrapper>
        <MenuIcon color="action" onClick={toggleDrawer} cursor="pointer" />
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
          alt="logo"
          style={{ width: "70%", marginLeft:10 }}
        />
       
        </LogoWrapper>
        
        <SearchRapper>
          <SearchRoundedIcon color="action"/>
          <InputBase placeholder="Search mail" />
          <Tune color="action" />
        </SearchRapper>

        <IconsWrapper>
          <Icon>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
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
  height:'64px !important'
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
  marginLeft: 40,
  borderRadius: 8,
  marginRight:8,
  
  // width:'100% !important',
 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
    
  },
});

const IconsWrapper = styled(Box)({

  display: "grid",
  // justifyContent: "center",
  width:"70%",
  gridTemplateRows:"repeat(4,30)",
  background: "#f5f5f5",
  marginLeft:'30%',
  // gap:20,
  " & > div":{
    
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