import styled from "@emotion/styled";
import { CreatePage } from "features/listings/Create";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import CloseVector from "../../assets/close.svg";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <ModalContainer>
          <Modal>
            <Close>
              <CloseIcon
                src={CloseVector}
                alt="close"
                onClick={() => setShowModal(false)}
              />
            </Close>
            <CreatePage />
          </Modal>
        </ModalContainer>
      )}
      <MainNav>
        <LogoContainer>
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </LogoContainer>

        <NavLinkContainer>
          <NavLinks>
            <NavLink>
              <AddLink onClick={() => setShowModal(true)}>Add Listing</AddLink>
            </NavLink>
          </NavLinks>
        </NavLinkContainer>
      </MainNav>
    </>
  );
};

const MainNav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const LogoContainer = styled.a`
  display: block;
  margin-right: 1rem;
`;

const Image = styled.img`
  width: 160px;
  height: auto;
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavLink = styled.li`
  margin-left: 1rem;
`;

const Link = styled.a`
  color: #2f374f;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;

const AddLink = styled.div`
  color: #2f374f;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #2f374f;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: hidden;
`;

const Modal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  width: 80%;
  height: 80%;
  z-index: 10;
  overflow: hidden;
  overflow-y: auto;
`;

const CloseIcon = styled.img`
  width: 40px;
  height: auto;
  margin-top: 2rem;  
  cursor: pointer;
  position: absolute;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;