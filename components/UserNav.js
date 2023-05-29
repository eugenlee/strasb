import { Text, Navbar } from "@nextui-org/react";
import Logo from "../pages/logo";
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from '../userSlice'
import NextLink from 'next/link'

const UserNav = () => {
  const advertiser = useSelector((state) => state.user.advertiser);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    dispatch(changeUser());
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
      {advertiser ? (
        <Navbar.Content activeColor="secondary" hideIn="xs" variant="underline">
          <a style={style} href="/">
            Home
          </a>
          <a style={style} href="/portal">
            My Portal
          </a>
        </Navbar.Content>
      ) : (
        <Navbar.Content activeColor="secondary" hideIn="xs" variant="underline">
          <a style={style} href="/">
            Home
          </a>
          <a style={style} href="/create">
            Create
          </a>
          <a style={style} href="/mint">
            Minter
          </a>
          <a style={style} href="/portal">
            My Portal
          </a>
        </Navbar.Content>
      )}
      <a onClick={handleClick}>
        {advertiser ? "Advertiser" : "Creator"}
      </a>
    </Navbar>
  );
};

export default UserNav;
