import Navigation from "../components/Navigation"
import { Link } from "react-router-dom"

function SignUp() {
return (
    <div>
        <Navigation />

        <main className="container">
            <div className="auth-container">
                <div className="auth-image">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-idmWQ2W0ps4Xb8oMI7AgxtFQCvzGr8.png"
                        alt="Shopping Illustration"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className="auth-form">
                    <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>Create an account</h1>
                    <p style={{ color: "#666", marginBottom: 32 }}>Enter your details below</p>

                    <form>
                        <input type="text" placeholder="Name" className="input-field" />
                        <input type="email" placeholder="Email or Phone Number" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />

                        <button className="button button-primary" style={{ width: "100%" }}>
                            Create Account
                        </button>

                        <button className="button button-outline" style={{ width: "100%", marginTop: 16 }}>
                            <img src="/google-icon.svg" alt="Google" style={{ width: 20, marginRight: 8 }} />
                            Sign up with Google
                        </button>

                        <p style={{ textAlign: "center", marginTop: 16 }}>
                            Already have an account?{" "}
                            <Link to="/login" style={{ color: "#ff4444" }}>
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    </div>
)
}

export default SignUp