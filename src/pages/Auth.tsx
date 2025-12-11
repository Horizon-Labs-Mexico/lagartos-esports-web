import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, signIn, signUp } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const validateForm = () => {
    try {
      emailSchema.parse(email);
    } catch {
      toast({
        title: t("auth.error"),
        description: t("auth.invalidEmail"),
        variant: "destructive",
      });
      return false;
    }

    try {
      passwordSchema.parse(password);
    } catch {
      toast({
        title: t("auth.error"),
        description: t("auth.passwordMin"),
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          let message = t("auth.loginError");
          if (error.message.includes("Invalid login credentials")) {
            message = t("auth.invalidCredentials");
          }
          toast({
            title: t("auth.error"),
            description: message,
            variant: "destructive",
          });
        } else {
          toast({
            title: t("auth.success"),
            description: t("auth.loginSuccess"),
          });
        }
      } else {
        const { error } = await signUp(email, password, username);
        if (error) {
          let message = t("auth.signupError");
          if (error.message.includes("User already registered")) {
            message = t("auth.userExists");
          }
          toast({
            title: t("auth.error"),
            description: message,
            variant: "destructive",
          });
        } else {
          toast({
            title: t("auth.success"),
            description: t("auth.signupSuccess"),
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <a href="/">
              <img src={logo} alt="Lagartos Esports" className="h-16 w-16" />
            </a>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            {isLogin ? t("auth.loginTitle") : t("auth.signupTitle")}
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            {isLogin ? t("auth.loginSubtitle") : t("auth.signupSubtitle")}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username">{t("auth.username")}</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={t("auth.usernamePlaceholder")}
                  className="bg-background border-border"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">{t("auth.email")}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("auth.emailPlaceholder")}
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t("auth.password")}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("auth.passwordPlaceholder")}
                required
                className="bg-background border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("auth.loading")
                : isLogin
                ? t("nav.login")
                : t("nav.register")}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {isLogin ? t("auth.noAccount") : t("auth.hasAccount")}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-medium"
              >
                {isLogin ? t("nav.register") : t("nav.login")}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
