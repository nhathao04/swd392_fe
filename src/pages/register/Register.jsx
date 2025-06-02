import { Icon } from '@iconify/react'
import { useQuery } from '@tanstack/react-query'
import { Col, Row } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { getUserInformation } from '../../apis/authentication'
import background from '../../assets/Photos/background/login-image3.jpg'
import logo from '../../assets/Photos/logo/logo.svg'
import { AuthContext } from '../../Contexts/AuthContext'
import { getToken } from '../../utils/storageUtils'
import './Register.scss'
import toast from 'react-hot-toast'

function Register() {
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(AuthContext)
    
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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

    const validateForm = () => {
        if (!formData.fullName || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error('Please fill in all fields')
            return false
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match')
            return false
        }

        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters long')
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address')
            return false
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            })

            const data = await response.json()

            if (response.ok) {
                toast.success('Account created successfully! Please log in.')
                navigate('/login')
            } else {
                toast.error(data.message || 'Registration failed')
            }
        } catch (error) {
            console.error('Register error:', error)
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

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        if (token) {
            localStorage.setItem('token', token)
            refetch()
            if (userInfor && userInfor.user) {
                toast.success(`Welcome ${userInfor?.user.fullName}!`)
                navigate('/')
                return
            }
        } else if (getToken()) {
            const token = getToken()
            if (token) {
                refetch()
                if (userInfor) {
                    console.log(userInfor.user)
                    toast.success(`Welcome ${userInfor?.user.fullName}!`)
                    sessionStorage.setItem('currentUser', JSON.stringify(userInfor.user))
                    setCurrentUser(userInfor.user)
                    navigate('/')
                    return
                } else {
                    localStorage.removeItem('token')
                    toast.error('Something went wrong, please login again!')
                }
            }
        }
    }, [userInfor])

    return (
        <div className="modern-register">
            <div className="register-container">
                <div className="left-panel">
                    <div className="brand-section">
                        <img src={logo} alt="img" />
                    </div>
                </div>

                <div className="right-panel">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Create Account</h2>
                            <p>Join us today and start your journey</p>
                        </div>

                        <form className="register-form" onSubmit={handleSubmit}>

                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:account" className="input-icon" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Username Input */}
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

                            {/* Email Input */}
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:email-outline" className="input-icon" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:lock-outline" className="input-icon" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        className="form-input"
                                        required
                                    />
                                    <Icon
                                        icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                                        className="toggle-password"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <Icon icon="mdi:lock-check-outline" className="input-icon" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm Password"
                                        className="form-input"
                                        required
                                    />
                                    <Icon
                                        icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                                        className="toggle-password"
                                        onClick={toggleConfirmPasswordVisibility}
                                    />
                                </div>
                            </div>

                            {/* Register Button */}
                            <button 
                                type="submit" 
                                className="btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Icon icon="eos-icons:loading" className="loading-spinner" />
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <span>Create Account</span>
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

                            {/* Sign In Link */}
                            <div className="signin-prompt">
                                <span>Already have an account? </span>
                                <a href="/login" className="signin-link">Sign in</a>
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

export default Register