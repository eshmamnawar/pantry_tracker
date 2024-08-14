// useFirebaseAnalytics.js
import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase'; // Ensure firebaseConfig is exported from firebase.js

const app = initializeApp(firebaseConfig);

export default function useFirebaseAnalytics() {
  useEffect(() => {
    const initializeAnalytics = async () => {
      if (typeof window !== 'undefined') {
        try {
          const supported = await isSupported();
          if (supported) {
            getAnalytics(app);
          }
        } catch (error) {
          console.error('Error initializing Firebase Analytics:', error);
        }
      }
    };

    initializeAnalytics();
  }, []);
}
