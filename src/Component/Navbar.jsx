import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  
  Button,
} from "@nextui-org/react";
import { Link } from "react-router";
import { NavLink } from "react-router";
function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
          <Link to={"/"}>
          Home 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/Collection"}>
          Collection
          </Link>
        </NavbarItem>
      
        <NavbarItem>
          <Link to={"/About"}>
            About 
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link to={"/Contact"}>
          Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to={"/LogIn"}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button  color="primary"  variant="flat">
            <Link>
              Sign Up
            </Link>
          
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* side menu item */}
      <NavbarMenu>
      <NavLink to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/Collection"}>
        Collection
      </NavLink>
      <NavLink to={"/About"}>
        About
      </NavLink>
      <NavLink to={"/Contact"}>
        Contact
      </NavLink>
      </NavbarMenu>
    </Navbar>
  );
}
export default App;
