import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center">
                    Forget password
                </h1>
                <div className="text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>
                {status && (
                    <div className=" font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <form className="space-y-3" onSubmit={submit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-1 text-sm font-medium text-gray-900 "
                        >
                            Your Email
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                            placeholder="name@company.com"
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                        Email Password Reset Link
                    </button>
                    <p className="text-sm font-light text-gray-500 ">
                        I know my account password?{" "}
                        <Link
                            href={route("register")}
                            className="font-medium text-blue-600 hover:underline "
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </GuestLayout>
    );
}
