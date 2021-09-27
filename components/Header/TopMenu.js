import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopMenu() {
  return (
    <nav class="bg-indigo-600 text-gray-200 shadow dark:bg-gray-800 transition fixed z-20 w-full">
      <div class="w-full px-2 sm:px-4 xl:px-4">
        <div class="relative flex items-center justify-between py-2 xl:py-2.5">
          <div class="flex-1 flex items-center px-2 lg:px-0">
            <div class="flex">
              <button type="button" class="-ml-2 block relative flex-shrink-0 p-2 rounded-full hover:text-white bg-white bg-opacity-20 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-opacity-90 transition" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              {/* <a href="/" class="hidden lg:block">
                <img className='h-10 w-auto' src="https://api.freelogodesign.org/files/6413cc0f16c14ef5839660565130ea3e/thumb/logo_200x200.png?v=0" alt="" />
              </a> */}

            </div>

            <div class="hidden md:flex flex-1 justify-center px-2 lg:ml-3 lg:justify-start">
              <div class="max-w-lg w-full lg:max-w-md">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input class="block w-full pl-10 pr-3 py-2.5 border rounded-md leading-5 text-gray-200 border-indigo-800 bg-indigo-800 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-green-500 focus:text-gray-100 dark:bg-gray-900 dark:border-black sm:text-sm transition" autocomplete="off" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

          {/* toggle bar */}

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              <label
                for="toogle"
                className="flex items-center cursor-pointer"
              >
                <div className="ml-3 text-gray-700 font-medium mr-3">Light</div>
                <div className="relative">
                  <input id="toogle" type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition transform duration-300 ease-in-out"></div>
                </div>
                <div className="ml-2 text-gray-700 font-medium ">Dark</div>
              </label>
            </div>

            <div class="ml-2 mr-3 flex items-center space-x-3">
              <a href="/register" class="flex-shrink-0 hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md transition"> Sign up </a>
              <a href="/login" class="ml-2 px-4 py-2 flex-shrink-0 border border-white rounded-md hover:bg-white hover:bg-opacity-20 transition"> Login </a>
            </div>
          </div>

        </div>
      </div>
    </nav>


  )
}

/* <Disclosure as="nav" className="bg-gray-400">
      {({ open }) => ( */
    //     <>
    //       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex items-center justify-between h-16">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex-shrink-0 flex items-center">
    //               <img
    //                 className="block lg:hidden h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    //                 alt="Workflow"
    //               />
    //               <img
    //                 className="hidden lg:block h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
    //                 alt="Workflow"
    //               />
    //             </div>
    //             <div className="hidden sm:block sm:ml-6">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <a
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                       'px-3 py-2 rounded-md text-sm font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </a>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <button
    //               type="button"
    //               className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //             >
    //               <span className="sr-only">View notifications</span>
    //               {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}


    //             </button>

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="ml-3 relative">
    //               <div>
    //                 <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Your Profile
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Settings
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Sign out
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //           {navigation.map((item) => (
    //             <a
    //               key={item.name}
    //               href={item.href}
    //               className={classNames(
    //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block px-3 py-2 rounded-md text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </a>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>