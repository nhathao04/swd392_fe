import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserInformation } from '../../apis/authentication'
import logo from '../../assets/Photos/logo/logo.svg'
import { AuthContext } from '../../Contexts/AuthContext'
import { getToken } from '../../utils/storageUtils'
import './Login.scss'
import toast from 'react-hot-toast'

function Login() {
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { data: userInfor, refetch } = useQuery({
        queryKey: ['currentUser'],
        queryFn: getUserInformation,
        enabled: !!getToken()
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.username || !formData.password) {
            toast.error('Please fill in all fields')
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            })

            const data = await response.json()

            if (response.ok && data.token) {
                localStorage.setItem('token', data.token)
                sessionStorage.setItem('currentUser', JSON.stringify(data.user))
                setCurrentUser(data.user)
                toast.success(`Welcome ${data.user.fullName}!`)
                navigate('/')
            } else {
                toast.error(data.message || 'Login failed')
            }
        } catch (error) {
            console.error('Login error:', error)
            toast.error('Something went wrong, please try again!')
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleLogin = () => {
        window.open(`${import.meta.env.VITE_APP_API_URL}/auth/google`, '_self')
    }

    const handleFacebookLogin = () => {
        window.open(`${import.meta.env.VITE_APP_API_URL}/auth/facebook`, '_self')
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        if (token) {
            localStorage.setItem('token', token)
            refetch()
        } else if (getToken()) {
            refetch()
        }
    }, [])

    useEffect(() => {
        if (userInfor?.user) {
            toast.success(`Welcome ${userInfor.user.fullName}!`)
            sessionStorage.setItem('currentUser', JSON.stringify(userInfor.user))
            setCurrentUser(userInfor.user)
            navigate('/')
        }
    }, [userInfor])

    return (
        <div className="modern-login">
            <div className="login-container">
                {/* Left Panel - Logo */}
                <div className="left-panel">
                    <div className="brand-section">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                {/* Right Panel - Login Form */}
                <div className="right-panel">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Sign In</h2>
                            <p>Enter your credentials to access your account</p>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:account-outline" className="input-icon" />
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        placeholder="Username"
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:lock-outline" className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        className="form-input"
                                        required
                                    />
                                    <Icon
                                        icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'}
                                        className="toggle-password"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                            </div>

                            {/* Forgot password */}
                            <div className="form-options">
                                <a href="/forgot-password" className="forgot-link">
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button type="submit" className="btn-primary" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Icon icon="eos-icons:loading" className="loading-spinner" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <Icon icon="mdi:arrow-right" className="btn-arrow" />
                                    </>
                                )}
                            </button>

                            {/* Divider */}
                            <div className="divider">
                                <span>or continue with</span>
                            </div>

                            {/* Social Login */}
                            <div className="social-login">
                                <button
                                    type="button"
                                    className="btn-social btn-google"
                                    onClick={handleGoogleLogin}
                                >
                                    <Icon icon="devicon:google" />
                                    <span>Google</span>
                                </button>

                                <button
                                    type="button"
                                    className="btn-social btn-facebook"
                                    onClick={handleFacebookLogin}
                                >
                                    <Icon icon="devicon:facebook" />
                                    <span>Facebook</span>
                                </button>
                            </div>

                            {/* Register Link */}
                            <div className="signup-prompt">
                                <span>Don't have an account? </span>
                                <a href="/register" className="signup-link">Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="bg-decorations">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    )
}

export default Login
