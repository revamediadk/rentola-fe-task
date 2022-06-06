import styled from "@emotion/styled";
import { useState } from "react";

export type ListingProperties = {
  propertyType: string[];
  bedrooms: number[];
  bathrooms: number[];
};

export type ListingSearchProperties = {
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
};

export const SearchBar = ({
  listingProperties,
  handleSearch,
}: {
  listingProperties: ListingProperties;
  handleSearch: (searchProperties: ListingSearchProperties) => void;
}) => {
  const [searchState, setSearchState] = useState<ListingSearchProperties>({
    propertyType: "",
    bedrooms: 0,
    bathrooms: 0,
  });

  return (
    <SearchBarSection>
      <SearchBarContainer>
        {/* Create select fields for Property Type, Number of Bedrooms and Number of Bathrooms */}
        <SelectMenu
          value={searchState.propertyType}
          onChange={(event) => {
            const newState = {
              ...searchState,
              propertyType: event.target.value,
            };
            setSearchState(newState);
            handleSearch(newState);
          }}
        >
          <Option value="" disabled>
            Property Type
          </Option>
          {searchState.propertyType !== "" && <Option value="">Any</Option>}
          {listingProperties.propertyType.map((propertyType) => (
            <Option key={propertyType} value={propertyType}>{propertyType}</Option>
          ))}
        </SelectMenu>
        <SelectMenu
          value={searchState.bedrooms}
          onChange={(event) => {
            const newState = {
              ...searchState,
              bedrooms: parseInt(event.target.value, 10),
            };
            setSearchState(newState);
            handleSearch(newState);
          }}
        >
          <Option value={0} disabled>
            Number of Bedrooms
          </Option>
          {searchState.bedrooms !== 0 && <Option value={0}>Any</Option>}
          {listingProperties.bedrooms.map((bedrooms) => (
            <Option key={bedrooms} value={bedrooms}>{bedrooms}</Option>
          ))}
        </SelectMenu>
        <SelectMenu
          value={searchState.bathrooms}
          onChange={(event) => {
            const newState = {
              ...searchState,
              bathrooms: parseInt(event.target.value, 10),
            };
            setSearchState(newState);
            handleSearch(newState);
          }}
        >
          <Option value={0} disabled>
            Number of Baths
          </Option>
          {searchState.bathrooms !== 0 && <Option value={0}>Any</Option>}
          {listingProperties.bathrooms.map((bathrooms) => (
            <Option key={bathrooms} value={bathrooms}>{bathrooms}</Option>
          ))}
        </SelectMenu>
        <Clear
          onClick={() => {
            const newState = {
              propertyType: "",
              bedrooms: 0,
              bathrooms: 0,
            };
            setSearchState(newState);
            handleSearch(newState);
          }}
        >
          Clear
        </Clear>
      </SearchBarContainer>
    </SearchBarSection>
  );
};
const SearchBarSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin: 1rem;
`;

const SearchBarContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SelectMenu = styled.select`
  margin: 0rem 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: inherit;
  background-color: #fff;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    color: #ccc;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    outline: none;
  }
`;

const Option = styled.option`
  margin: 1rem 2rem;
`;

const Clear = styled.button`
  background-color: #1ed366;
  color: white;
  padding: 0.2rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
