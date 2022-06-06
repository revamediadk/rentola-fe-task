import styled from "@emotion/styled";
import Location from "../../../assets/icons/location-sign.svg";
import Surface from "../../../assets/icons/surface-sign.svg";
import Bathroom from "../../../assets/icons/bathroom-sign.svg";
import Bedroom from "../../../assets/icons/bedroom-sign.svg";
import Property from "../../../assets/icons/property-sign.svg";
import VerifiedBadge from "../../../assets/icons/verified-sign.svg";
import { useEffect, useState } from "react";

export type Listing = {
  id: number;
  name: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  verified: boolean;
  caseNumber: string;
  detailsTitle: string;
  detailsDescription: string;
  imageLink: string;
  price: string;
  cycle: string;
};

export const ListingCard = ({ listing }: { listing: Listing }) => {
  const {
    id,
    name,
    location,
    area,
    bedrooms,
    bathrooms,
    propertyType,
    verified,
    imageLink,
    price,
    cycle,
  } = listing;

  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 100);
  }, []);

  return (
    <Card href={`listings/${id}`} active={active} >
      <CardImageContainer>
        <Image src={imageLink} alt={name} />
        <ImageText>
          <h3>{name}</h3>
        </ImageText>
      </CardImageContainer>
      <CardDetails>
        <AddressDetail>
          <Icon src={Location} />
          <Text>{location}</Text>
        </AddressDetail>
        <PropertyDetails>
          <Detail>
            <Icon src={Surface} />
            <Text>{area} m2</Text>
          </Detail>
          <Detail>
            <Icon src={Bathroom} />
            <Text>{bathrooms}</Text>
          </Detail>
          <Detail>
            <Icon src={Bedroom} />
            <Text>{bedrooms}</Text>
          </Detail>
          <Detail>
            <Icon src={Property} />
            <Text>{propertyType}</Text>
          </Detail>
        </PropertyDetails>
        <Price>
          <Cycle>{`${price} €/${cycle}`}</Cycle>
          {verified && (
            <Verified>
              <Icon src={VerifiedBadge} />
              Verified
            </Verified>
          )}
        </Price>
      </CardDetails>
    </Card>
  );
};

type CardProps = {
  active: boolean;
};

const Card = styled.a<CardProps>`
  width: 320px;
  height: 364px;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageText = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  width: 100%;
  bottom: 0;
  z-index: 2;
  h3 {
    width: 80%;
    margin: 1rem auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 164px;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const AddressDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 0rem 1rem;
`;

const Text = styled.p`
  margin: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PropertyDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 1rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 1rem 0rem 0.2rem;

  p {
    margin: 0.5rem 0rem;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1481f8;
  color: #fff;
  border-radius: 0 0 0.5rem 0.5rem;
`;

const Cycle = styled.div`
  display: flex;
  margin: 0rem;
  text-transform: capitalize;
  padding: 0.2rem 1rem;
`;

const Verified = styled.div`
  display: flex;
  margin: 0rem;
  text-transform: capitalize;
  padding: 0.2rem 1rem;
  font-weight: bold;
  background-color: #00bf5c;
  border-radius: 0 0 0.5rem 0;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;
