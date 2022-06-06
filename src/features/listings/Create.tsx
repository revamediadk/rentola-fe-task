import styled from "@emotion/styled";
import axios from "axios";
import { InputField } from "features/design-system/input-field";
import { useState } from "react";

export type Values = {
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

export type FormState = {
  [key: string]: any;
  values: Values;
  submitSuccess: boolean;
  submitError: boolean;
  loading: boolean;
};

export const CreatePage = () => {
  const [formState, setFormState] = useState<FormState>({
    values: {
      name: "",
      location: "",
      area: 0,
      bedrooms: 0,
      bathrooms: 0,
      propertyType: "",
      verified: false,
      caseNumber: "",
      detailsTitle: "",
      detailsDescription: "",
      imageLink: "",
      price: "",
      cycle: "",
    },
    submitSuccess: false,
    submitError: false,
    loading: false,
  });

  const { values } = formState;
  const [refreshValidations, setRefreshValidations] = useState(false);

  const handleChange = <T extends keyof Values>(
    fieldName: T,
    value: Values[T]
  ) => {
    setFormState((prevState) => {
      const newState = {
        ...prevState,
        values: {
          ...prevState.values,
          [fieldName]: value,
        },
      };
      if (refreshValidations) {
        return {
          ...newState,
        };
      }
      return newState;
    });
  };

  const handleSubmit = (e: any) => {
    setRefreshValidations(true);
    e.preventDefault();
    setFormState((formState) => ({
      ...formState,
      loading: true,
    }));

    //const body has all the items from values
    const body = {
      name: values.name,
      location: values.location,
      area: values.area,
      bedrooms: values.bedrooms,
      bathrooms: values.bathrooms,
      propertyType: values.propertyType,
      verified: values.verified,
      caseNumber: values.caseNumber,
      detailsTitle: values.detailsTitle,
      detailsDescription: values.detailsDescription,
      imageLink: values.imageLink,
    };

    //check if any of formState.values is empty
    const isEmpty = Object.values(body).some(
      (value) => value === "" || value === null
    );

    if (isEmpty) {
      setFormState((formState) => ({
        ...formState,
        loading: false,
        submitError: true,
      }));
      return;
    }

    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/listings`, body)
      .then((res) => {
        setFormState((formState) => ({
          ...formState,
          submitSuccess: true,
          loading: false,
        }));
      })
      .catch((err) => {
        setFormState((formState) => ({
          ...formState,
          submitError: true,
          loading: false,
        }));
      });
  };

  return (
    <NewListingContainer>
      <Heading>Create Listing</Heading>
      <FieldContainer>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <InputField
            placeholder="e.g. Luxury Appartment"
            value={formState.values.name}
            onChange={(updateValue) => {
              handleChange("name", updateValue);
            }}
          />
        </Field>
        <Field>
          <FieldLabel>Location</FieldLabel>
          <InputField
            placeholder="e.g. London"
            value={formState.values.location}
            onChange={(updateValue) => {
              handleChange("location", updateValue);
            }}
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Area</FieldLabel>
          <InputField
            placeholder="e.g. 100 sq m"
            value={formState.values.area.toString()}
            type="number"
            onChange={(updateValue) => {
              handleChange("area", parseInt(updateValue));
            }}
          />
        </Field>
        <Field>
          <FieldLabel>Property Type</FieldLabel>
          <InputField
            placeholder="e.g. Apartment"
            value={formState.values.propertyType}
            onChange={(updateValue) => {
              handleChange("propertyType", updateValue);
            }}
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Bedrooms</FieldLabel>
          <InputField
            placeholder="e.g. 2"
            type="number"
            value={formState.values.bedrooms.toString()}
            onChange={(updateValue) => {
              handleChange("bedrooms", parseInt(updateValue));
            }}
          />
        </Field>
        <Field>
          <FieldLabel>Bathrooms</FieldLabel>
          <InputField
            placeholder="e.g. 2"
            type="number"
            value={formState.values.bathrooms.toString()}
            onChange={(updateValue) => {
              handleChange("bathrooms", parseInt(updateValue));
            }}
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Case Number</FieldLabel>
          <InputField
            placeholder="e.g. 12345"
            value={formState.values.caseNumber}
            onChange={(updateValue) => {
              handleChange("caseNumber", updateValue);
            }}
          />
        </Field>
        <Field>
          <FieldLabel>Details Title</FieldLabel>
          <InputField
            placeholder="e.g. Luxury Apartment"
            value={formState.values.detailsTitle}
            onChange={(updateValue) => {
              handleChange("detailsTitle", updateValue);
            }}
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Details Description</FieldLabel>
          <InputField
            placeholder="e.g. This is a luxury apartment"
            value={formState.values.detailsDescription}
            onChange={(updateValue) => {
              handleChange("detailsDescription", updateValue);
            }}
            isMultiLine
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Image Link</FieldLabel>
          <InputField
            placeholder="e.g. Image Url"
            value={formState.values.imageLink}
            onChange={(updateValue) => {
              handleChange("imageLink", updateValue);
            }}
          />
        </Field>
      </FieldContainer>
      <FieldContainer>
        <Field>
          <FieldLabel>Price</FieldLabel>
          <InputField
            placeholder="e.g. £100"
            type="number"
            value={formState.values.price.toString()}
            onChange={(updateValue) => {
              handleChange("price", updateValue);
            }}
          />
        </Field>
        <Field>
          <FieldLabel>Cycle</FieldLabel>
          <SelectMenu
            value={formState.values.cycle}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const cycle = String(e.target.value);
              handleChange("cycle", cycle);
            }}
          >
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </SelectMenu>
        </Field>
        <Field>
          <FieldLabel>Verified</FieldLabel>
          <SelectMenu
            value={formState.values.verified ? "true" : "false"}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const verifiedToggle = String(e.target.value) === "true";
              handleChange("verified", verifiedToggle);
            }}
          >
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </SelectMenu>
        </Field>
      </FieldContainer>
      {formState.submitSuccess && (
        <SuccessMessage>Listing created successfully!</SuccessMessage>
      )}
      {formState.submitError && (
        <ErrorMessage>
          There was an error creating the listing. Please try again.
        </ErrorMessage>
      )}
      <ButtonContainer>
        <Button onClick={handleSubmit} disabled={formState.loading}>
          {formState.loading ? "Loading..." : "Submit"}
        </Button>
      </ButtonContainer>
    </NewListingContainer>
  );
};

const NewListingContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

const Heading = styled.div`
  font-size: 2rem;
  margin: 2rem auto;
`;

const FieldContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
`;

const Field = styled.div`
  margin: 1rem 2rem;
`;

const FieldLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  &.have-sub-label {
    margin-bottom: 6px;
  }
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #1ed366;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const SuccessMessage = styled.div`
  color: #1ed366;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
`;

const SelectMenu = styled.select`
  margin: 0rem 2rem;
  padding: 15px;
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
