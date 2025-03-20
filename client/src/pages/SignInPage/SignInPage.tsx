import SignInForm from "@/features/auth/ui/SignInForm/SignInForm";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function SignInPage() {
  const user = useAppSelector((state) => state.user.user?.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(CLIENT_ROUTES.MAIN);
    }
  }, [user, navigate]);

  return <SignInForm />;
}
