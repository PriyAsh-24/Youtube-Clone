# YouTube Clone Web Project
- This project is a YouTube clone built using React, Tailwind CSS,Redux Toolkit and React Router. It aims to replicate the core functionalities of YouTube, including browsing videos, playing them, and managing a user's viewing experience.

## Features

### Header
- Utilizes Redux store components to handle toggle on and off of Sidebar menu on click of hamburger menu
![Header](./For%20Readme/Screenshot%202024-04-09%20142450.png)

### Sidebar 
![Sidebar](./For%20Readme/Screenshot%202024-04-09%20142701.png)

![Sidebar](./For%20Readme/HumburgerToggle.mp4)

### SearchBar 
- Added debouncing functionality to  search bar, so that it only makes a request for limited time also added those results to redux store so that it wont search again and again

<video width="320" height="240" controls>
  <source src="./For%20Readme/Serach.mp4" type="video/mp4">
</video>

### Youtube Api 
- used Youtube Api to get the most Popular Video
![MainContainer](./For%20Readme/Screenshot%202024-04-09%20143452.png)












# Steps Involved In Making
- Header Component
- Sidebar
- hamburger Menu
- Button List
- Video Container   
    - Video Card
- Importing Video On watch Page 
- Search Functionality
- Creating Cache Slice
- Nested Comments
- Live Chats