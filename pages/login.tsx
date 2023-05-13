import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
// import { useAuth } from '../hooks/useAuth';

interface LoginFormValues {
    email: string;
    password: string;
}

const WIP = true;

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginFormValues>();
    const [errorMessage, setErrorMessage] = useState('');
    // const { login } = useAuth();
    const router = useRouter();

    const onSubmit = async (data: LoginFormValues) => {
        try {
            // await login(data.email, data.password);
            router.push('/dashboard');
        } catch (error) {
            setErrorMessage("error");
        }
    };

    return (WIP ?
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src="/underconst.jpg" alt="Coming Soon" width={500} height={500} />
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Coming Soon...
                </h2>
            </div>
        </div>

        :
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {errorMessage && (
                            <div className="text-red-500">{errorMessage}</div>
                        )}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    // ref={register({
                                    //     required: 'Email address is required',
                                    //     pattern: {
                                    //         value: /\S+@\S+\.\S+/,
                                    //         message: 'Email address is not valid',
                                    //     },
                                    // })}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                {/* {errors.email && (
                                    <div className="text-red-500">{errors.email.message}</div>
                                )} */}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    // ref={register({
                                    //     required: 'Password is required',
                                    //     minLength: {
                                    //         value: 6,
                                    //         message: 'Password must be at least 6 characters',
                                    //     },
                                    // })}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                                {/* {errors.password && (
                                    <div className="text-red-500">{errors.password.message}</div>
                                )} */}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
