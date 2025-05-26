import { create } from "zustand";

type UserStore = {
  user: string | null;
  isFetching: boolean;

  setUser: (user: string | null) => void;
  logout: () => void;
  login: (formData: string) => Promise<void>;
  signup: (formData: string) => Promise<void>;
  getUser: () => Promise<Object>;
};

const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  isFetching: false,
  setUser: (user) => set({ user }),

  logout: () => set({ user: null }),

  login: async (formData: string) => {
    try {
      set({
        isFetching: true,
      });
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      set({ user: data.user });
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      set({ isFetching: false });
    }
  },
  signup: async (formData: string) => {
    try {
      set({
        isFetching: true,
      });
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("SignUp failed");
      }

      const data = await response.json();
      set({ user: data.user });
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      set({ isFetching: false });
    }
  },

  getUser: async () => {
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
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
}));

export default useUserStore;
