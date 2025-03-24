// app/create-account/page.tsx
'use client';

import AccountCreation from '@/components/auth/AccountCreation';
import { useRouter } from 'next/navigation';

export default function CreateAccountPage() {
  const router = useRouter();
  
  const handleBack = () => {
   
    router.back();
  };
  
  const handleSubmit = (data: { document: File | null; password: string }) => {
  
    console.log('Creating account with:', data);
    

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050512] flex items-center justify-center">
      <AccountCreation onBack={handleBack} onSubmit={handleSubmit} />
    </div>
  );
}