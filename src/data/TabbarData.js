import ChatListScreen from './../screens/ChatListScreen';
import StatusListScreen from './../screens/StatusListScreen';
import CallListScreen from './../screens/CallListScreen';


export const TabBarData = [
    
    {
        id:1,
        route: ChatListScreen,
        name: "Chats"
    },
    {
        id:2,
        route: StatusListScreen,
        name: "Status",
    },
    {
        id:3,
        route: CallListScreen,
        name: "Calls",
    },
]