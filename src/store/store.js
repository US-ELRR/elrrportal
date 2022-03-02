import create from 'zustand';

const useStore = create((set) => ({
  user: {
    name: '',
    email: '',
    password: '',
    type: '',
  },
  setUserCredentials: (user) => set((state) => ({ ...state, user })),
}));

export default useStore;
