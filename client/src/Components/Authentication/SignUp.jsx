import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

export default function SignUp() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        cUser,
        cLoading,
        cError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    let signUpError;
    if (gError || cError || uError) {
        signUpError = <p class="text-error">{gError?.message || cError?.message || uError?.message}</p>
    }
    const onSubmit = async(data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.mail, data.password)
        await updateProfile({displayName: data.displayName})
        navigate('/ ')
    };
    if (gUser || cUser) {
        console.log(gUser || cUser);
    }
    if (cLoading || gLoading || updating) {
        <Loading />
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign up</h2>
                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="grid place-items-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" class="input input-bordered w-full max-w-xs"{...register("displayName",
                                        {
                                            required: {
                                                value: true,
                                                message: "Name is required"
                                            },
                                            pattern: {
                                                value: /^[a-z ,.'-]+$/i,
                                                message: 'Name is not valid',
                                            }
                                        })} />
                                    <label class="label">
                                        <span class="label-text-alt"> <p class="text-error">{errors.name?.message}</p></span>
                                    </label>
                                </div>

                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" class="input input-bordered w-full max-w-xs"{...register("mail",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                ,
                                                message: 'Email is not a valid email address'
                                                ,
                                            }
                                        })} />
                                    <label class="label">
                                        <span class="label-text-alt"> <p class="text-error">{errors.mail?.message}</p></span>
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" class="input input-bordered w-full max-w-xs"{...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: "Password must be at least 8 characters, contain at least one letter and one number"
                                        }
                                    })} />

                                    <label class="label">
                                        <span class="label-text-alt"> <p class="text-error">{errors.password?.message}</p></span>
                                    </label>
                                </div>
                                {signUpError}
                                <div class="text-center">
                                    <button class="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                            <p class="text-sm mt-2">Already have an account? <Link class="text-primary" to="/login">Login here!!!</Link> </p>
                        </div>
                        <div class="divider">OR</div>
                        <div class="grid place-items-center justify-items-center">
                            <button class="btn btn-secondary text-white font-bold"
                                onClick={() => signInWithGoogle()}
                            ><FcGoogle class="w-6 h-6 mr-1" />Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
