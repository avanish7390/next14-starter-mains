import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css"
import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";


const LoginPage =()  => {
    // const session = await auth();

    // console.log(session)

    // const handleGithubLogin = async () => {

    //     "use server"
    //     await signIn("github")
    // }

//    auth?.user?isAdmin && router.push("/");
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <form action={handleGithubLogin}>
                <button className={styles.github}>Login with Github</button>
            </form>
           <LoginForm />
        </div>
        </div>
    )
}

export default LoginPage 