import GitHubSignIn from "./GitHubSignIn";
import GoogleSignIn from "./GoogleSignIn";

const LoginButtons = () => {
    return (
        <div className="flex space-x-2">
            <GoogleSignIn />
            <GitHubSignIn />
        </div>
    );
};

export default LoginButtons;
