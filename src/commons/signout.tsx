'use client'

import { useActionState } from 'react';
import { signout } from "../app/login/actions";
import "../app/globals.css";


export const SignOutButton = () => {
  const [state, signoutAction] = useActionState(signout, undefined);

  return (
    <button 
      onClick={() => signout()} 
      className={"w-full py-2 px-4 bg-gray-500 text-white dark:bg-gray-700 text-white  hover:bg-gray-600 hover:cursor-pointer rounded text-center"}>
        Sign Out
    </button>
  );
}
