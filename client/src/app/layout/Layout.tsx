import { getUserFavRecipesThunk } from "@/entities/recipe";
import { refreshTokensThunk } from "@/entities/user";
import { AlertContainer } from "@/features/alert";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
//import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header/Header";
import { JSX, useEffect } from "react";
import { Outlet } from "react-router";

export default function Layout(): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.user?.id);
  useEffect(() => {
    dispatch(refreshTokensThunk());
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getUserFavRecipesThunk(userId));
    }
  }, [dispatch, userId]);
  return (
    <>
      <Header />
      <AlertContainer />
      <Outlet />
    </>
  );
}
//   <Footer />
