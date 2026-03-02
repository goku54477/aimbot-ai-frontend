import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                if (error.code === '23505') { // Postgres unique violation code
                    setStatus('error');
                    setErrorMessage('Email is already on the waitlist.');
                } else {
                    setStatus('error');
                    setErrorMessage(error.message || 'Failed to join waitlist.');
                }
            } else {
                setStatus('success');
                setEmail('');
            }
        } catch (err: any) {
            setStatus('error');
            setErrorMessage('An unexpected error occurred.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto my-8 md:my-12">
            {status === 'success' ? (
                <div className="p-4 border border-[#00B0F0] bg-[#00B0F0]/10 rounded-xl text-center animate-premium-fade">
                    <p className="font-mono text-[11px] md:text-[13px] text-[#00B0F0] uppercase tracking-widest font-bold">
                        Access Granted: You are on the waitlist.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-3 w-full">
                    <div className="relative w-full flex-1">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER EMAIL ADDRESS_"
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-black/50 border border-white/20 focus:border-[#00B0F0] text-white font-mono text-[11px] md:text-[13px] px-4 py-3 md:py-4 rounded-xl outline-none placeholder:text-zinc-600 focus:shadow-[0_0_15px_rgba(0,176,240,0.3)] transition-all uppercase tracking-widest disabled:opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full sm:w-auto pill-button px-6 md:px-8 py-3 md:py-4 text-[11px] md:text-[13px] text-white font-mono font-black uppercase tracking-widest whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        <span className="relative z-10 transition-colors group-hover:text-[#00B0F0]">
                            {status === 'loading' ? 'PROCESSING...' : 'JOIN WAITLIST'}
                        </span>
                    </button>
                </form>
            )}

            {status === 'error' && (
                <p className="mt-4 text-center text-red-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">
                    [ERROR] {errorMessage}
                </p>
            )}
        </div>
    );
};

export default WaitlistForm;
