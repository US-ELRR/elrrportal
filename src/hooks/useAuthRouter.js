import useStore from '@/store/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * @description UseAuthRouter hook to redirect to login page if user is not logged. Provides router object otherwise.
 * @returns {object} - new router object with isAuthenticated property
 */
export default function useAuthRouter() {
  const userData = useStore((store) => store.userData);

  const router = useRouter();
  useEffect(() => {
    if (!userData?.learner) {
      router.push('/');
    }
  }, [!!userData]);

  return { isAuthenticated: !!userData, ...router };
}
