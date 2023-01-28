import React from 'react';

export const Header = () => (
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Rev-Craft Frank-Wu Yitong-Wu Frank Minecraft connection_lost" />
        <meta name="description" content="Yitong Wu's personal website." />
        <meta name="author" content="Yitong Wu" />
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16.png" sizes="16x16" />
        <title>Frank's Website</title>
    </head>
)

export const Copy = () => (
    <div class="copy">
        &copy;2012-{new Date().getFullYear()} crafter.me
    </div>
)

export const Accessibility = () => (
    <span></span>
)