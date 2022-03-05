import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { AppContext, useGlobalContext } from '../context/GlobalContext'

export default function Cart() {
  const {
    CloseCart,
    open,
    cartItems,
    amount,
    descreaseItem,
    BuyItem,
    setCartItems,
    removeItem,
    checkOut,
  } = useGlobalContext(AppContext)
  const { user } = useContext(AuthContext)

  const itemPrices = cartItems?.reduce((a, c) => a + c.price * c.qty, 0)

  return (
    <>
      {open && (
        <div className='fixed inset-0 overflow-hidden z-50'>
          <div className='absolute inset-0 overflow-hidden'>
            <div
              className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
              aria-hidden='true'
            />
            <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 py-6 overflow-y-auto px-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <h2 className='text-lg font-medium text-gray-900'>
                        Shopping cart
                      </h2>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          onClick={() => CloseCart()}
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                        >
                          <span className='sr-only'>Close panel</span>

                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className='mt-8'>
                      <div className='flow-root'>
                        <ul
                          role='list'
                          className='-my-6 divide-y divide-gray-200'
                        >
                          {cartItems &&
                            cartItems.map((item) => (
                              <SingleItemCart
                                key={item._id}
                                item={item}
                                amount={amount}
                                descreaseItem={descreaseItem}
                                BuyItem={BuyItem}
                                removeItem={removeItem}
                                setCartItems={setCartItems}
                                cartItems={cartItems}
                              />
                            ))}

                          {/* More products... */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                    {cartItems.length !== 0 && (
                      <>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <p>Total</p>
                          <p>${itemPrices.toFixed(2)}</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-500'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <a
                            onClick={() =>
                              checkOut(user._id, itemPrices.toFixed(2))
                            }
                            className='flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                          >
                            Checkout
                          </a>
                        </div>
                      </>
                    )}

                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        or{' '}
                        <button
                          type='button'
                          className='text-indigo-600 font-medium hover:text-indigo-500'
                          onClick={() => CloseCart()}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> →</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const SingleItemCart = ({
  item,
  descreaseItem,
  BuyItem,
  removeItem,
  setCartItems,
  cartItems,
}) => {
  const [isEdit, setIsEdit] = useState(false)

  const [tempQty, setTempQty] = useState(0)

  const OpenEdit = (qty) => {
    setTempQty(qty)
    setIsEdit(true)
  }

  const handleCancel = (item) => {
    setIsEdit(false)
    // console.log(tempQty)
    setCartItems(
      cartItems.map((x) => (x._id === item._id ? { ...item, qty: tempQty } : x))
    )
  }

  const Edited = () => {
    setIsEdit(false)
  }

  return (
    <>
      <li className='py-6 flex'>
        <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
          <img
            src={item.image}
            alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div className='ml-4 flex-1 flex flex-col'>
          <div>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <h3>
                <a href='#'> {item.name} </a>
              </h3>
              <p className='ml-4'>${item.price * item.qty.toFixed(2)}.00</p>
            </div>
            <p className='mt-1 text-sm text-gray-500'>{item.type}</p>
          </div>
          <div className='flex-1 flex items-end justify-between text-sm'>
            <div className='flex'>
              {isEdit ? (
                <span className='flex items-center flex-1'>
                  <div className='flex items-center justify-center flex-1'>
                    <i
                      className='fa-solid fa-plus'
                      onClick={() => BuyItem(item)}
                    ></i>
                    <p className='px-2'>{item.qty}</p>
                    <i
                      className='fa-solid fa-minus'
                      onClick={() => descreaseItem(item)}
                    ></i>
                  </div>
                  <div className='flex items-center justify-center space-x-4 ml-5'>
                    <i
                      className='fa-solid fa-check text-green-500 cursor-pointer '
                      onClick={() => Edited()}
                    ></i>
                    <i
                      className=' fa-solid fa-xmark text-red-400 text-xl cursor-pointer'
                      onClick={() => handleCancel(item)}
                    ></i>
                  </div>
                </span>
              ) : (
                <p className='text-gray-500'>Qty {item.qty}</p>
              )}

              {isEdit === false && (
                <span
                  className='text-blue-500 capitalize cursor-pointer px-3'
                  onClick={() => OpenEdit(item.qty)}
                >
                  Edit
                </span>
              )}
            </div>

            <div className='flex'>
              <button
                type='button'
                className='font-medium text-indigo-600 hover:text-indigo-500'
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
