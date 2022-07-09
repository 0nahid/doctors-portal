import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";

export default function Login() {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        sUser,
        sLoading,
        sError,
    ] = useSignInWithEmailAndPassword(auth);
    if (gUser || sUser) {
        console.log(gUser || sUser);
    }
    if (gError || sError) {
        console.log(gError || sError);
    }
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="grid place-items-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <span class="label-text-alt"> <p>{errors.mail?.message}</p></span>
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" class="input input-bordered w-full max-w-xs"{...register("password",{
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        pattern:{
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: "Password must be at least 8 characters, contain at least one letter and one number"
                                        }
                                    } )} />

                                    <label class="label">
                                        <span class="label-text-alt"> <p>{errors.password?.message}</p></span>
                                    </label>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-primary" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                        <div class="divider">OR</div>
                        <div class="grid place-items-center justify-items-center">
                            <button class="btn btn-secondary text-white font-bold"
                                onClick={() => signInWithGoogle()}
                            ><FcGoogle class="w-6 h-6 mr-1" />Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
