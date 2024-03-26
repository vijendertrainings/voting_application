import { UsersIcon } from '@heroicons/react/24/solid'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { NewspaperIcon } from '@heroicons/react/24/solid'


const LeftMenu=({state_prop_value})=>{
    
    const handleMenuClick = (itemClicked) => {
        console.log('Button clicked!' + itemClicked);
        state_prop_value(itemClicked);
      };
      console.log("loading the left menu");
    return (
        <>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('login')}>
                <UsersIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Login</p>
            </button>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('feed')}>
                <ListBulletIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Feed</p>
            </button>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('calendar')}>
                <CalendarIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Calendar</p>
            </button>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('posts')}>
                <NewspaperIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Jobs</p>
            </button>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('posts')}>
                <NewspaperIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Posts</p>
            </button>
            <button className="flex items-center w-full" onClick={() => handleMenuClick('posts')}>
                <NewspaperIcon className="h-4 w-4 mr-2 text-black" />
                <p className="h-20 text-center flex items-center">Daily Quiz</p>
            </button>

        </>
    );

}

export default LeftMenu;