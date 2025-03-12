import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage, NotFoundPage, SignInPage, SignUpPage } from "@/pages";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import Layout from "../layout/Layout";
import ShopForm from "@/features/auth/ui/ShopForm/ShopForm";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
          <Route path={CLIENT_ROUTES.SHOP_FORM} element={<ShopForm />} />
          <Route path={CLIENT_ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route path={CLIENT_ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={CLIENT_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
