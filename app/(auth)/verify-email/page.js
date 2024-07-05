
"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VerifyEmail() {
    const router = useRouter();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const { token, email } = router.query;
                if (token && email) {
                    // Make a fetch or axios request to your backend to verify the email
                   // const response = await fetch(`/api/verify-email?token=${token}&email=${email}`);
                   const response = await fetch('http://localhost:8888/confirmation')
                    if (response.ok) {
                        console.log('Email verified successfully');
                        // Redirect or show a success message
                    } else {
                        console.error('Failed to verify email');
                        // Handle error, show a message to the user, etc.
                    }
                } else {
                    console.error('Token or email is missing from query parameters');
                    // Handle case where token or email is missing
                }
            } catch (error) {
                console.error('Error verifying email', error);
                // Handle any unexpected errors
            }
        };

        verifyEmail();
    }, [router.query]);

    return (
        <div>
            <p>Verifying email...</p>
            
        </div>
    );
}




/*"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
//import { supabase } from '../utils/supabaseClient'; // Ensure this path is correct
import { supabase } from '@/utils/supabaseclient';

export default function VerifyEmail() {
    const router = useRouter();
    const [message, setMessage] = useState('Verifying your email...');

    useEffect(() => {
        const verifyEmail = async () => {
            const { error } = await supabase.auth.verifyOtp({
                type: 'signup',
                token: router.query.token,
                email: router.query.email,
            });

            if (error) {
                setMessage('Verification failed. Please try again.');
            } else {
                setMessage('Email verified successfully! Redirecting to login...');
                setTimeout(() => {
                    router.push('/login');
                }, 3000); // Redirect to login after 3 seconds
            }
        };

        if (router.query.token && router.query.email) {
            verifyEmail();
        }
    }, [router.query]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">{message}</h1>
        </div>
    );
}
*/