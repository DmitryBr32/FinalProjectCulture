import SignUpForm from "@/features/auth/ui/SignUpForm/SignUpForm";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function SignUpPage() {
  const user = useAppSelector((state) => state.user.user?.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(CLIENT_ROUTES.MAIN);
    }
  }, [user, navigate]);

  return <SignUpForm />;
}
