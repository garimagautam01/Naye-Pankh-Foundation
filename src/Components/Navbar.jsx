import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div className='ml-64'>
            <div className='flex justify-between h-20 '>
                <div className=" h-40"></div>
                <div className='flex justify-between'>
                    {

                        isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>log Out</button>) : (<button onClick={() => loginWithRedirect()}>Log In</button>)
                    }
                    {/* <button>login</button>
                    <button>logout</button> */}
                    <div className='mt-3'>
                        {
                            isAuthenticated ? (<h6 className='font-bold ml-2' >{user.name}</h6>) : (<h6 className='font-bold ml-2' ></h6>)
                        }
                        <h6 className='text-sm ml-2 '>fundraiser</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar