import create from 'zustand';

const useStore = create((set) => ({
  user: {
    name: '',
    email: '',
    password: '',
    type: '',
  },
}));

export default useStore;
