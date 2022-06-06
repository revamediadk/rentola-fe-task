import styled from "@emotion/styled";
import {
  ListingProperties,
  ListingSearchProperties,
  SearchBar,
} from "features/design-system/search-bar";
import { useEffect, useState } from "react";
import { Listing, ListingCard } from "./Components/ListingCard";

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [listingProperties, setListingProperties] = useState<ListingProperties>(
    {
      propertyType: [],
      bedrooms: [],
      bathrooms: [],
    }
  );
  const [start, setStart] = useState(0);
  const [resultsCount, setResultsCount] = useState(0);
  const [searchState, setSearchState] = useState<ListingSearchProperties>({
    propertyType: "",
    bedrooms: 0,
    bathrooms: 0,
  });

  useEffect(() => {
    const filteredListings = listings.filter((listing) => {
      let isValid = true;
      if (searchState.propertyType) {
        isValid = isValid && listing.propertyType === searchState.propertyType;
      }
      if (searchState.bedrooms) {
        isValid = isValid && listing.bedrooms === searchState.bedrooms;
      }
      if (searchState.bathrooms) {
        isValid = isValid && listing.bathrooms === searchState.bathrooms;
      }
      return isValid;
    });
    setFilteredListings(filteredListings);
  }, [listings, searchState]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/listings?_start=${start}&_limit=3`
    )
      .then((res) => {
        const count = res.headers.get("X-Total-Count");
        if (count) {
          setResultsCount(parseInt(count, 10));
        }
        return res.json();
      })
      .then((data) => {
        const result = listings.concat(data);
        setListings(result);
        setFilteredListings(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  useEffect(() => {
    let newListingProperties: ListingProperties = {
      propertyType: [],
      bedrooms: [],
      bathrooms: [],
    };
    listings.forEach((listing) => {
      if (listing.propertyType) {
        newListingProperties.propertyType.push(listing.propertyType);
      }
      if (listing.bedrooms) {
        newListingProperties.bedrooms.push(listing.bedrooms);
      }
      if (listing.bathrooms) {
        newListingProperties.bathrooms.push(listing.bathrooms);
      }
    });
    newListingProperties.propertyType = [
      ...new Set(newListingProperties.propertyType),
    ];
    newListingProperties.bedrooms = [...new Set(newListingProperties.bedrooms)];
    newListingProperties.bathrooms = [
      ...new Set(newListingProperties.bathrooms),
    ];

    // order newListingProperties.propertyType
    newListingProperties.propertyType.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    // order newListingProperties.bedrooms
    newListingProperties.bedrooms.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    // order newListingProperties.bathrooms
    newListingProperties.bathrooms.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    setListingProperties(newListingProperties);
  }, [listings]);

  const handleSearch = (searchProperties: ListingSearchProperties) => {
    const filteredListings = listings.filter((listing) => {
      let isValid = true;
      if (searchProperties.propertyType) {
        isValid =
          isValid && listing.propertyType === searchProperties.propertyType;
      }
      if (searchProperties.bedrooms) {
        isValid = isValid && listing.bedrooms === searchProperties.bedrooms;
      }
      if (searchProperties.bathrooms) {
        isValid = isValid && listing.bathrooms === searchProperties.bathrooms;
      }
      return isValid;
    });
    setSearchState(searchProperties);
    setFilteredListings(filteredListings);
  };

  return (
    <>
      <ListingPage data-testid="listing-page">
        <SearchBar
          listingProperties={listingProperties}
          handleSearch={handleSearch}
        />
        <ListingsSection>
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </ListingsSection>
        <LoadMoreButton
          data-testid="load-more-button"
          disabled={start + 3 >= resultsCount}
          onClick={() => setStart(start + 3)}
        >
          {start === resultsCount ? "No more listings to load" : "Load More"}
        </LoadMoreButton>
      </ListingPage>
    </>
  );
};

const ListingPage = styled.div``;

const ListingsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
`;

const LoadMoreButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  display: block;
  margin: 2rem auto;
  width: 14rem;
  font-family: "Roboto", sans-serif;
  &:hover {
    background-color: #e6e6e6;
  }
  &:disabled {
    background-color: #e6e6e6;
    cursor: not-allowed;
    color: #ccc;
  }
`;
