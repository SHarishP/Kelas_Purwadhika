// 16.14 Berikut merupakan pembuatan useAuthStore
import { create } from "zustand";
import { deleteCookie } from "cookies-next";

export interface IUser {
  name: string;
  email: string;
  role: string;
}

// 16.15 Pada Zustand berikut memiliki state/hooks bernama user, onAuthSucess, dan clearAuth
interface IAuthStore {
  user: IUser | null;
  onAuthSuccess: (user: IUser | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  // 16.17 State "onAuthSuccess" merubah state user dan mengisinya dengan payload dari "access_token" yang telah didecode. Sehingga kita bisa memiliki global state user yang berisi name, email, dan role. Dimana name ini bisa dipasangkan ke navbar untuk memunculkan "Welcome, [name]". Next masuk ke file "navbar.tsx" di dalam folder "src/views/component"
  onAuthSuccess: (payload) => set(() => ({ user: payload })),
  clearAuth: () => {
    set(() => ({ user: null }));
    deleteCookie("access_token");
  },
}));

export default useAuthStore;
