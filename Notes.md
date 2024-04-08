## Requirments Clarification
- Features
- Tech Stack - react tailwind redux formic react-router-dom bundler jest 

## Planing Things Up
- Design how will you structure your APP
- use refrence from yt site
    - Header
    - Sidebar
    - Body
        - button list
        - video Blocks

### Learned
- Higher Order Function in Video Card
- Debouncing for Search Functionality

#### Working of Debouncing with settimeout
key pressed - i
- render the component
- useEffect();
- set timer => make api call after 200ms

key pressed - ip
- destroy the component (useEffect return)
- re-render the component
- useEffect()
- start timer => make api call

toh mtlb maine key dabai useEffect call hua usne 200ms wait kiya per itni der mai agar maine dusri key daba di 
to use effect ka return call hua aur usne timer hata diya jiski wjah se api call nahi hua

- Creating Cache for Search
time complexity to search in array=O(n)
time complexity to search in map=O(n)
time complexity to search in Object=O(1)

- Challenges to make live   
    - get data live
    - update the UI
- Using Live Data
    - Create web Sockets (it connects our ui layer with server directly two way connection)(like a handshake)(example-trading apps,whatsapp)
    - Api polling (Data flow from server to ui )(exmaple Gmail,cricbuzz)

