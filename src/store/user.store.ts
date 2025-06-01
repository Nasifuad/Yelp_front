import { create } from "zustand";
const API_URL = "https://yelp-khoh.onrender.com";
type UserStore = {
  user: string | null;
  isFetching: boolean;

  setUser: (user: string | null) => void;
  logout: () => void;
  login: (formData: object) => Promise<void>;
  signup: (formData: object) => Promise<boolean>;
  getUser: () => Promise<Object>;
  authenticate: () => Promise<void>;
};
const useUserStore = create<UserStore>((set) => ({
  user: null,
  isFetching: false,
  setUser: (user) => set({ user }),

  logout: () => set({ user: null }),

  login: async (formData) => {
    try {
      set({
        isFetching: true,
      });
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      set({ user: data.user.userName });
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      set({ isFetching: false });
    }
  },
  signup: async (formData) => {
    try {
      console.log(API_URL);
      set({
        isFetching: true,
      });
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response from server", response);
      if (!response.ok) {
        throw new Error("SignUp failed");
      }

      const data = await response.json();
      console.log("response data from server", data);
      set({ user: data.user.userName });
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    } finally {
      set({ isFetching: false });
      return true;
    }
  },

  getUser: async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.log("Error getting all users", error);
      return;
    }
  },
  authenticate: async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response from server as a authenticatior", response);
      const data = await response.json();
      set({ user: data.user.userName });
    } catch (error) {}
  },
}));

export default useUserStore;
