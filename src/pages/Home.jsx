import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { inject, observer } from "mobx-react";
import {
  Container, // Wrapper (div) for all the content in this component
  Logo, // The logo image (img)
  Form, // Form wrapping the search
  Label, // Label for the search input
  NearbyCities, // List (ul) which will show nearby cities
  NearbyCity, // List item (li) showing the nearby city
  NearbyLink, // Making the city clickable (a)
  autoComplete // some styles for the autocomplete component
} from "../elements/home";

import logo from "../images/theclima.svg";

export default () => "Home";
