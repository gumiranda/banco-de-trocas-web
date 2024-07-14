import { useContext, createContext, useState, useEffect } from "react";
import { getStorageItem, setStorageItem } from "../utils/localStorage";
import { api } from "@/shared/api";
import { cartMapper } from "../mappers";
import formatPrice from "../utils/format-price";

const CART_KEY = "cartItems";

export type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[];
  quantity: number;
  total: string;
  isInCart: (id: string) => boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  loading: boolean;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: "$0.00",
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
};

export const CartContext = createContext<CartContextData>(CartContextDefaultValues);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data, loading }: any = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price;
  }, 0);

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false);

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems);
    setStorageItem(CART_KEY, cartItems);
  };

  const addToCart = (id: string) => {
    saveCart([...cartItems, id]);
  };

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id);
    saveCart(newCartItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

// Custom hook to fetch games
export const useQueryGames = (params = {}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = [
          {
            id: "1",
            name: "Game One",
            description: "Description for Game One",
          },
          {
            id: "2",
            name: "Game Two",
            description: "Description for Game Two",
          },
        ];
        const response = { data: games }; // await api.get("/games", { params });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [params]);

  return { data, loading, error };
};

// Custom hook to fetch a game by slug
export const useQueryGameBySlug = (slug) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = {
          data: {
            id: "1",
            name: "Game One",
            description: "Description for Game One",
          },
        }; //await api.get(`/games/${slug}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [slug]);

  return { data, loading, error };
};
