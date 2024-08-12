import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useBannerStore = create(
  persist(
    (set) => ({
      timeLeft: 0,
      isVisible: false,
      setTimeLeft: (time) => set({ timeLeft: time }),
      setIsVisible: (visible) => set({ isVisible: visible }),
      load:true,
      setLoad: (load) => set({ load: load }),
    }),
    {
      name: 'banner-storage', // name of item in storage (local storage)
      getStorage: () => localStorage, // using local storage for persistence
    }
  )
);

export default useBannerStore;
