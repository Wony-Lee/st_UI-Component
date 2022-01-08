import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled/macro";
import axios from "axios";
import { throttle } from "throttle-debounce";

interface Airline {
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    head_quaters: string;
    website: string;
    established: string;
}

interface Passenger {
    _id: string;
    name: string;
    trips: number;
    airline: Airline;
    __v: number;
}

function App() {
    return <div>Hello Intersection Observer Scroll</div>;
}

export default App;
