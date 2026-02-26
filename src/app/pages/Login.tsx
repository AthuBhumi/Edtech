import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AriaOrb } from '../components/aria/AriaOrb';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Crown, BookOpen, GraduationCap, Heart, Sparkles, Zap, Users, AlertCircle } from 'lucide-react';
import {
  signInWithGoogle,
  signInWithEmail,
  createAccount,
  resetPassword
} from '../services/firebase';

type Role = 'principal' | 'teacher' | 'student' | 'parent';
type AuthMode = 'signin' | 'signup';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>('principal');
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const roles = [
    { value: 'principal' as Role, label: 'Principal', icon: Crown, color: '#2563EB' },
    { value: 'teacher' as Role, label: 'Teacher', icon: BookOpen, color: '#10B981' },
    { value: 'student' as Role, label: 'Student', icon: GraduationCap, color: '#06B6D4' },
    { value: 'parent' as Role, label: 'Parent', icon: Heart, color: '#F59E0B' },
  ];

  const friendlyError = (code: string) => {
    switch (code) {
      case 'auth/user-not-found': return 'No account found with this email.';
      case 'auth/wrong-password': return 'Incorrect password. Please try again.';
      case 'auth/email-already-in-use': return 'An account with this email already exists.';
      case 'auth/weak-password': return 'Password should be at least 6 characters.';
      case 'auth/invalid-email': return 'Please enter a valid email address.';
      case 'auth/popup-closed-by-user': return 'Google sign-in was cancelled.';
      case 'auth/too-many-requests': return 'Too many attempts. Please try again later.';
      case 'auth/invalid-credential': return 'Invalid email or password.';
      default: return 'Something went wrong. Please try again.';
    }
  };

  const handleEmailAuth = async () => {
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    if (authMode === 'signup') {
      if (!displayName.trim()) { setError('Please enter your full name.'); return; }
      if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
      if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    }
    setIsLoading(true);
    try {
      if (authMode === 'signup') {
        await createAccount(email, password, displayName);
      } else {
        await signInWithEmail(email, password);
      }
      navigate(`/${selectedRole}`);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? '';
      setError(friendlyError(code));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsGoogleLoading(true);
    try {
      await signInWithGoogle();
      navigate(`/${selectedRole}`);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? '';
      setError(friendlyError(code));
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { setError('Enter your email above first.'); return; }
    setError('');
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? '';
      setError(friendlyError(code));
    }
  };

  const switchMode = (mode: AuthMode) => {
    setAuthMode(mode);
    setError('');
    setResetSent(false);
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div
        className="w-[55%] relative flex flex-col justify-between p-12"
        style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #0F1D3D 50%, #0A1628 100%)' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1758632191243-2ae754748db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwZ29sZGVuJTIwaG91ciUyMHN1bnNldHxlbnwxfHx8fDE3NzE4NzMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080)' }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#06B6D4]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">ES</span>
            </div>
            <div>
              <h1 className="text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>EduSphere</h1>
              <p className="text-xs text-white/60">Powered by ARIA</p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Where Every Student's Journey Begins
          </h1>
          <p className="text-lg text-white/70 mb-12">AI-powered school management for the next generation</p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="glass-card rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#06B6D4]" />
              <span className="text-white text-sm font-medium">4 Smart Roles</span>
            </div>
            <div className="glass-card rounded-full px-6 py-3 flex items-center gap-2">
              <AriaOrb size="sm" animated={false} />
              <span className="text-white text-sm font-medium">ARIA AI Assistant</span>
            </div>
            <div className="glass-card rounded-full px-6 py-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-white text-sm font-medium">Real-time Everything</span>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 glass-card rounded-2xl p-6 max-w-md">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex-shrink-0" />
            <div>
              <p className="text-white/90 text-sm mb-2">
                "ARIA has transformed how we manage our school. It's like having a brilliant assistant who never sleeps."
              </p>
              <p className="text-white/60 text-xs">Dr. Sharma, Principal, Delhi Public School</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/40 text-xs">v2.0 | © 2025 EduSphere</div>
      </div>

      {/* Right Panel */}
      <div className="w-[45%] flex items-center justify-center p-12 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1679236703556-fdff82eb6a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBhZXJpYWwlMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE4NzMyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] to-transparent opacity-90" />

        {/* Form Card */}
        <div
          className="relative z-10 w-full max-w-md glass-card rounded-3xl p-8"
          style={{ backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {/* Header + mode toggle */}
          <div className="mb-6">
            <h2 className="text-3xl text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              {authMode === 'signin' ? 'Welcome Back' : 'Join EduSphere'}
            </h2>
            <p className="text-white/60 text-sm">
              {authMode === 'signin' ? 'Sign in to your account' : 'Create your account'}
            </p>
          </div>

          {/* Sign In / Sign Up toggle */}
          <div className="flex rounded-xl overflow-hidden border border-white/10 mb-6">
            <button
              onClick={() => switchMode('signin')}
              className={`flex-1 py-2.5 text-sm font-medium transition-all ${authMode === 'signin' ? 'bg-[#2563EB] text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => switchMode('signup')}
              className={`flex-1 py-2.5 text-sm font-medium transition-all ${authMode === 'signup' ? 'bg-[#2563EB] text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              Create Account
            </button>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.value;
              return (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`p-3 rounded-xl flex flex-col items-center gap-1.5 transition-all ${isSelected ? 'text-white shadow-lg' : 'glass-card text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  style={isSelected ? { background: role.color, boxShadow: `0 0 16px ${role.color}40` } : {}}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{role.label}</span>
                </button>
              );
            })}
          </div>

          {/* Error banner */}
          {error && (
            <div className="flex items-center gap-2 mb-4 px-3 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Reset success */}
          {resetSent && (
            <div className="flex items-center gap-2 mb-4 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              Password reset email sent! Check your inbox.
            </div>
          )}

          {/* Full Name (signup only) */}
          {authMode === 'signup' && (
            <div className="mb-4">
              <Label className="text-white/80 mb-2 block text-sm">Full Name</Label>
              <Input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your full name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#2563EB]"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <Label className="text-white/80 mb-2 block text-sm">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@school.edu"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#2563EB]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label className="text-white/80 mb-2 block text-sm">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={authMode === 'signup' ? 'Min. 6 characters' : 'Enter your password'}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#2563EB] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm Password (signup only) */}
          {authMode === 'signup' && (
            <div className="mb-4">
              <Label className="text-white/80 mb-2 block text-sm">Confirm Password</Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#2563EB]"
              />
            </div>
          )}

          {/* Forgot Password (signin only) */}
          {authMode === 'signin' && (
            <div className="text-right mb-5">
              <button
                onClick={handleForgotPassword}
                className="text-sm text-[#06B6D4] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {authMode === 'signup' && <div className="mb-5" />}

          {/* Primary Button */}
          <Button
            onClick={handleEmailAuth}
            disabled={isLoading}
            className="w-full h-12 text-base font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #1B3A8C, #2563EB)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {authMode === 'signup' ? 'Creating Account...' : 'Signing In...'}
              </div>
            ) : (
              authMode === 'signup' ? 'Create Account' : 'Sign In'
            )}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-white/40">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google Sign In */}
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            className="w-full h-11 glass-card border-white/10 text-white hover:bg-white/10 disabled:opacity-50"
          >
            {isGoogleLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Connecting...
              </div>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </>
            )}
          </Button>

          {/* Powered by ARIA */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-xs text-white/40">Powered by</span>
            <AriaOrb size="sm" />
            <span className="text-xs text-white font-medium">ARIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
