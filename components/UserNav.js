import { Text, Navbar } from "@nextui-org/react";
import { Logo } from "../pages/logo";
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from '../userSlice'
import { useState } from 'react'
import { Link } from '@nextui-org/react'

const UserNav = () => {
  // const advertiser = useSelector((state) => state.user.advertiser);
  // const dispatch = useDispatch()
  const [user, setUser] = useState('false');

  const handleClick = () => {
    // dispatch(changeUser());
    setUser(!user);
  }


  const style = {
    fontFamily: "SF Pro Display",
    fontSize: "25px",
    color: "Black",
    fontWeight: "500",
  };

  return (
    <Navbar variant="sticky">
      <Navbar.Brand href="/">
        <Logo />
        <Text
          color="inherit"
          hideIn="xs"
          size={30}
          css={{ fontWeight: "600", textShadow: "0px 0px 3px #ffffff" }}
        >
          <a href="/">Strasb</a>
        </Text>
      </Navbar.Brand>
      {user ? (
        <Navbar.Content activeColor="secondary" hideIn="xs" variant="underline">
          <Link style={style} href="/">
            Home
          </Link>
          <Link style={style} href="/portal">
            My Portal
          </Link>
        </Navbar.Content>
      ) : (
        <Navbar.Content activeColor="secondary" hideIn="xs" variant="underline">
          <Link style={style} href="/">
            Home
          </Link>
          <Link style={style} href="/create">
            Create
          </Link>
          <Link style={style} href="/mint">
            Minter
          </Link>
          <Link style={style} href="/portal">
            My Portal
          </Link>
        </Navbar.Content>
      )}
      <Link onClick={handleClick}>
        {user ? "Advertiser" : "Creator"}
      </Link>
    </Navbar>
  );
};

export default UserNav;
