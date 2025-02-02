// // // // // 'use client'
// // // // // import type React from "react"
// // // // // import { createContext, useState, useContext, type ReactNode } from "react"

// // // // // export interface CartItem {
// // // // //   id: string
// // // // //   name: string
// // // // //   price: number
// // // // //   quantity: number
// // // // //   image: string
// // // // // }

// // // // // interface CartContextType {
// // // // //   cartItems: CartItem[]
// // // // //   addToCart: (item: CartItem) => void
// // // // //   updateQuantity: (id: string, quantity: number) => void
// // // // //   removeFromCart: (id: string) => void
// // // // // }

// // // // // const CartContext = createContext<CartContextType | undefined>(undefined)

// // // // // export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
// // // // //   const [cartItems, setCartItems] = useState<CartItem[]>([])

// // // // //   const addToCart = (item: CartItem) => {
// // // // //     setCartItems((prevItems) => {
// // // // //       const existingItem = prevItems.find((i) => i.id === item.id)
// // // // //       if (existingItem) {
// // // // //         return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
// // // // //       }
// // // // //       return [...prevItems, item]
// // // // //     })
// // // // //   }

// // // // //   const updateQuantity = (id: string, quantity: number) => {
// // // // //     setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
// // // // //   }

// // // // //   const removeFromCart = (id: string) => {
// // // // //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
// // // // //   }

// // // // //   return (
// // // // //     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   )
// // // // // }

// // // // // export const useCart = () => {
// // // // //   const context = useContext(CartContext)
// // // // //   if (context === undefined) {
// // // // //     throw new Error("useCart must be used within a CartProvider")
// // // // //   }
// // // // //   return context
// // // // // }






// // // // 'use client'
// // // // import { createContext, useContext, useState } from "react"

// // // // interface CartItem {
// // // //   id: number
// // // //   // Add other properties as needed
// // // // }

// // // // interface CartContextType {
// // // //   cartItems: CartItem[]
// // // //   addToCart: (item: CartItem) => void
// // // //   removeFromCart: (itemId: number) => void
// // // // }

// // // // const CartContext = createContext<CartContextType | null>(null)

// // // // export const useCart = () => {
// // // //   const context = useContext(CartContext)
// // // //   if (context === null) {
// // // //     throw new Error("useCart must be used within a CartProvider")
// // // //   }
// // // //   return context
// // // // }

// // // // export const CartProvider = ({ children }: { children: React.ReactNode }) => {
// // // //   const [cartItems, setCartItems] = useState<CartItem[]>([])

// // // //   const addToCart = (item: CartItem) => {
// // // //     setCartItems([...cartItems, item])
// // // //   }

// // // //   const removeFromCart = (itemId: number) => {
// // // //     setCartItems(cartItems.filter((item) => item.id !== itemId))
// // // //   }

// // // //   return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
// // // // }










// // // 'use client'
// // // import type React from "react"
// // // import { createContext, useState, useContext, type ReactNode } from "react"

// // // export interface CartItem {
// // //   id: string
// // //   name: string
// // //   price: number
// // //   quantity: number
// // //   image: string
// // // }

// // // interface CartContextType {
// // //   cartItems: CartItem[]
// // //   addToCart: (item: CartItem) => void
// // //   updateQuantity: (id: string, quantity: number) => void
// // //   removeFromCart: (id: string) => void
// // // }

// // // const CartContext = createContext<CartContextType | undefined>(undefined)

// // // export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
// // //   const [cartItems, setCartItems] = useState<CartItem[]>([])

// // //   const addToCart = (item: CartItem) => {
// // //     setCartItems((prevItems) => {
// // //       const existingItem = prevItems.find((i) => i.id === item.id)
// // //       if (existingItem) {
// // //         return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
// // //       }
// // //       return [...prevItems, item]
// // //     })
// // //   }

// // //   const updateQuantity = (id: string, quantity: number) => {
// // //     setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
// // //   }

// // //   const removeFromCart = (id: string) => {
// // //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
// // //   }

// // //   return (
// // //     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   )
// // // }

// // // export const useCart = () => {
// // //   const context = useContext(CartContext)
// // //   if (context === undefined) {
// // //     throw new Error("useCart must be used within a CartProvider")
// // //   }
// // //   return context
// // // }









// // 'use client'
// // import type React from "react"
// // import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

// // export interface CartItem {
// //   id: string
// //   name: string
// //   price: number
// //   quantity: number
// //   image: string
// // }

// // interface CartContextType {
// //   cartItems: CartItem[]
// //   addToCart: (item: CartItem) => void
// //   updateQuantity: (id: string, quantity: number) => void
// //   removeFromCart: (id: string) => void
// //   cartCount: number
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined)

// // export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
// //   const [cartItems, setCartItems] = useState<CartItem[]>([])
// //   const [cartCount, setCartCount] = useState(0)

// //   useEffect(() => {
// //     const storedCart = localStorage.getItem("cart")
// //     if (storedCart) {
// //       setCartItems(JSON.parse(storedCart))
// //     }
// //   }, [])

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cartItems))
// //     setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))
// //   }, [cartItems])

// //   const addToCart = (item: CartItem) => {
// //     setCartItems((prevItems) => {
// //       const existingItem = prevItems.find((i) => i.id === item.id)
// //       if (existingItem) {
// //         return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
// //       }
// //       return [...prevItems, item]
// //     })
// //   }

// //   const updateQuantity = (id: string, quantity: number) => {
// //     setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
// //   }

// //   const removeFromCart = (id: string) => {
// //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
// //   }

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartCount }}>
// //       {children}
// //     </CartContext.Provider>
// //   )
// // }

// // export const useCart = () => {
// //   const context = useContext(CartContext)
// //   if (context === undefined) {
// //     throw new Error("useCart must be used within a CartProvider")
// //   }
// //   return context
// // }









// 'use client'
// import type React from "react"
// import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

// export interface CartItem {
//   id: string
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// interface CartContextType {
//   cartItems: CartItem[]
//   addToCart: (item: CartItem) => void
//   updateQuantity: (id: string, quantity: number) => void
//   removeFromCart: (id: string) => void
//   cartCount: number
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const [cartCount, setCartCount] = useState(0)

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart")
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart)
//       setCartItems(parsedCart)
//       setCartCount(parsedCart.reduce((total: number, item: CartItem) => total + item.quantity, 0))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems))
//     setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))
//   }, [cartItems])

//   const addToCart = (item: CartItem) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id)
//       if (existingItem) {
//         return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
//       }
//       return [...prevItems, item]
//     })
//   }

//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
//   }

//   const removeFromCart = (id: string) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
//   }

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }










'use client'
import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCartItems(parsedCart)
      setCartCount(parsedCart.reduce((total: number, item: CartItem) => total + item.quantity, 0))
      console.log("Cart loaded from localStorage:", parsedCart)
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
      setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))
      console.log("Cart saved to localStorage:", cartItems)
    }
  }, [cartItems, isInitialized])

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      }
      return [...prevItems, item]
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

