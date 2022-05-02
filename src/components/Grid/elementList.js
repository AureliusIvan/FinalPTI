import "./List.css";
import React, { Component } from 'react';

import Pause from '../buttons/PauseBtn';
import Phone from '../buttons/PhoneBtn';
import Counter from '../../Clock';
import Menu from "../map";

export const items = [
    {
        id: 1,
        first: [<Pause />],
        second: [<Counter/>],
        third: [],
        fourth: []
    },
    {
        id: 2,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 3,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 4,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 5,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 6,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 7,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 8,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 9,
        first: [],
        second: [],
        third: [],
        fourth: []
    },
    {
        id: 10,
        first: [<Phone />],
        second: [],
        third: [],
        fourth: [<Menu />]
    },
];
