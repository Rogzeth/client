import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { UserAddIcon, KeyIcon, PlusIcon, BookOpenIcon } from '@heroicons/react/solid'
import {Context} from "../../context/Context";
import Profile from "../User/Profile";
import Settings from "../User/Settings";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {
  const [profile, setProfile] = useState(false);
  const [settings, setSettings] = useState(false)
  const {user, setUser} = useContext(Context);
  const [blocks, setBlocks] = props.blocks;
  const offBlocks = {
    latest: false,
    popular: false,
    about: false,
    users: false
  }

  function getClassDesctop(status) {
    return (status
      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")

  }

  function getClassMobile(status) {
    return (status
      ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium")

  }

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <div
                    className="block lg:hidden h-8 w-auto"
                    alt="FINAL BOSS"
                  ><div className="text-white underline decoration-dashed py-2"><BookOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /></div></div>
                  <div
                    className="hidden lg:block h-8 w-auto"
                    alt="FINAL BOSS"
                  ><div className="text-white underline decoration-dashed py-2"><BookOpenIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /></div></div>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <button
                      onClick={() => setBlocks({...offBlocks, latest: true})}
                      className={getClassDesctop(blocks.latest)}>
                      Latest
                    </button>
                    <button
                        onClick={() => setBlocks({...offBlocks, popular: true})}
                      className={getClassDesctop(blocks.popular)}
                    >
                      Popular
                    </button>
                    <button
                        onClick={() => setBlocks({...offBlocks, about: true})}
                      className={getClassDesctop(blocks.about)}
                    >
                      About
                    </button>
                    <button
                        onClick={() => setBlocks({...offBlocks, users: true})}
                      className={getClassDesctop(blocks.users)}
                    >
                      Users
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>


                  {/* Profile dropdown */}
                  {user.id &&<>
                    <div className="hidden lg:block lg:ml-4">
                      <Settings handleSettingsClick={[settings, setSettings]} />
                      <Profile handleProfileClick={[profile, setProfile]}/>
                    <div className="flex items-center">
                      <button
                        onClick={() => user.id && setBlocks({...offBlocks, post: true})}
                        type="button"
                        className={`${blocks.post && "disabled:opacity-75"} relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm ${!blocks.post && "hover:bg-indigo-700"}`}
                        disabled={blocks.post}
                      >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span>New Post</span>
                      </button>
                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white px-2 py-1 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.img ? user.img : "/img/default.jpeg"}
                            alt=""
                          />
                          <div className="ml-3">
                          <div className="text-base-300 py-2 font-medium text-white">Hello, {user.username}!</div>
                        </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>

                            {({ active }) => (
                              <a
                                onClick={() => {setProfile(true)}}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {setSettings(true)}}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => setUser({})}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    </div>

                  </div>

                    </>
                  }
                  {!user.id &&
                    <>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <button
                        onClick={props.visibleLogin}
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700"
                      >
                        <KeyIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span>Sign In</span>
                      </button>
                    </div>
                      </div></div>
                    <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <button
                    onClick={props.visibleRegister}
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700"
                    >
                    <UserAddIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>Sign Up</span>
                    </button>
                    </div>
                    </div></div></>

                  }


            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                onClick={() => setBlocks({...offBlocks, latest: true})}
                as="a"
                className={getClassMobile(blocks.latest)}
              >
                Latest
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => setBlocks({...offBlocks, popular: true})}
                as="a"
                className={getClassMobile(blocks.popular)}
              >
                Popular
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => setBlocks({...offBlocks, about: true})}
                as="a"
                className={getClassMobile(blocks.about)}
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => setBlocks({...offBlocks, users: true})}
                as="a"
                className={getClassMobile(blocks.users)}
              >
                Users
              </Disclosure.Button>
            </div>
            {user.id &&
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.img ? user.img : "/img/default.jpeg"}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.username}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            }
            {!user.id &&
              <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="pt-4 pb-3 border-t border-gray-700">

                <Disclosure.Button
                  onClick={props.visibleLogin}
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Login
                </Disclosure.Button>
                <Disclosure.Button
                  onClick={props.visibleLogin}
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Registration
                </Disclosure.Button>

              </div></div>
            }

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
