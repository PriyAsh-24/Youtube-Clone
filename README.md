# YouTube Clone Web Project
This project is a YouTube clone built using React, Tailwind CSS,Redux Toolkit and React Router. It aims to replicate the core functionalities of YouTube, including browsing videos, playing them, and managing a user's viewing experience.

## Features

### Header
- Utilizes Redux store components to handle toggle on and off of Sidebar menu on click of hamburger menu
![Header](./For%20Readme/Screenshot%202024-04-09%20142450.png)
![Humburger Menu](./For%20Readme/Toggle.gif)

### Sidebar 
- With Functionality to route back to page using Link of React Router Dom

![Sidebar](./For%20Readme/Screenshot%202024-04-09%20142701.png)

### SearchBar 
- Added debouncing functionality to search bar, so that it only makes a request for limited time 
- Added results to redux store so that it won't call the api again and again
![Sidebar](./For%20Readme/Search.gif)

### Youtube Api 
- used Youtube Api to get the most Popular Video
- Also created a Higher Order Funtion to Add the ad video card to aur yt video Container

![MainContainer](./For%20Readme/Screenshot%202024-04-09%20143452.png)

### Watch Page 
- Used Routing to Route to Watch page which is having features like 

#### Video Playback 
- Playing the video from Youtube embeded code where video id is taken from params using useSearchParams of React Router Dom

![YTVideo](./For%20Readme/VideoYt.gif)

#### Infinity Comment 
- used Recursion to create infinite comments funtionality just like reddiit

![Infinity Comment](./For%20Readme/Screenshot%202024-04-09%20160116.png)

#### Live Chat
- using poling to get the live message from server(here using Dummy data)

![Live Chat](./For%20Readme/LiveChat.gif)


![OverallPage](./For%20Readme/Screenshot%202024-04-09%20172612.png)