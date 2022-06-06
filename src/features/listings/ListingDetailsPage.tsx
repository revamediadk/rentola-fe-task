import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Listing } from "./Components/ListingCard";
import Mail from "../../assets/icons/mail-sign.svg";

export const ListingDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState<Listing>();

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/listings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      {listing && (
        <>
          <ListingPage>
            <ListingDetailsContainer>
              <ListingDetailsImage src={listing.imageLink} />
              <ListingDetails>
                <ListingDetailsTitle>{listing.name}</ListingDetailsTitle>
                <Address>
                  <AddressText>{listing.location}</AddressText>
                </Address>
                <PropertyDetails>
                  <Detail>
                    Area:
                    <Text>{listing.area} m2</Text>
                  </Detail>
                  <Detail>
                    Bedroom:
                    <Text>{listing.bedrooms}</Text>
                  </Detail>
                  <Detail>
                    Property Type:
                    <Text>{listing.propertyType}</Text>
                  </Detail>
                  <Detail>
                    Bathroom:
                    <Text>{listing.bathrooms}</Text>
                  </Detail>
                  <Detail>
                    Cycle:
                    <Text>{listing.cycle}</Text>
                  </Detail>
                  <Detail>
                    Verified by Rentola:
                    <Text>{listing.verified ? "Verified" : "Not Verified"}</Text>
                  </Detail>
                  <Detail>
                    Case number:
                    <Text>{listing.caseNumber}</Text>
                  </Detail>
                </PropertyDetails>
              </ListingDetails>
            </ListingDetailsContainer>
            <ListingDetailsContainer>
              <ListingDetails>
                <ListingDetailsTitle>
                  {listing.detailsTitle}
                </ListingDetailsTitle>
                <Break />
                <ListingDetailsText>
                  {listing.detailsDescription}
                </ListingDetailsText>
              </ListingDetails>
            </ListingDetailsContainer>
          </ListingPage>
          <Footer>
            <FooterTitle>
              {listing.name}
              <FooterTitleText>{listing.location}</FooterTitleText>
            </FooterTitle>
            <FooterAction>
              <FooterPrice>{`${listing.price} €/${listing.cycle}`}</FooterPrice>
                <FooterButton>
                    <Icon src={Mail} />
                    <FooterButtonText>Contact</FooterButtonText>
                </FooterButton>
            </FooterAction>
          </Footer>
        </>
      )}
    </>
  );
};

const ListingPage = styled.div`
  height: calc(100vh + 120px);
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Break = styled.hr`
  margin: 1rem 0;
  width: 100px;
  border: 3px solid #3a5795;
  border-radius: 5px;
`;

const ListingDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  padding: 2rem;
  border-radius: 0.5rem;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 1px;
  margin: 2rem;
`;

const ListingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 1rem 0 0rem;
  font-family: "Roboto", sans-serif;
`;

const ListingDetailsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #2f374f;
`;

const ListingDetailsText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ListingDetailsImage = styled.img`
  width: 48%;
  height: auto;
  border-radius: 0.5rem;
  margin: 0 4rem 0 0;
`;

const Text = styled.p`
  margin: 0.5rem;
  overflow: hidden;
  color: black;
  text-transform: capitalize;
`;

const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #828282;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`;

const AddressText = styled.p`
  margin: 0.5rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #8c8c8c;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const FooterTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: #2f374f;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FooterTitleText = styled.p`
  margin: 0.5rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #8c8c8c;
  font-size: 1rem;
  font-weight: 500;
`;

const FooterAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #2f374f;
  font-size: 1.5rem;
  font-weight: bold;
  border-left: 2px solid #3a5795;
`;

const FooterPrice = styled.p`
    margin: 0.5rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #3b82f695;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 6rem;
`;

const FooterButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #1ed366;
    border-radius: 0.2rem;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #1ed366;
        color: #fff;
    }
`;

const FooterButtonText = styled.p`
    margin: 1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Icon = styled.img`
    width: 1.5rem;
    height: auto;
    margin: 0.5rem;
`;