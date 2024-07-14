"use client";
import { HistoryPage } from "./pages/History/HistoryPage";
import Home from "./pages/Home";
import { NotificationsPage } from "./pages/Notifications/NotificationsPage";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { SearchPage } from "./pages/Search/SearchPage";
import { ServiceDetailPage, services } from "./pages/ServiceDetail/ServiceDetailPage";
import { SettingsPage } from "./pages/Settings/SettingsPage";

export const MovingPage = () => {
  return (
    <>
      <ProfilePage />
      {/* <SettingsPage />
      <NotificationsPage />
      <SearchPage />
      <HistoryPage />
      <ServiceDetailPage service={services[0]} /> */}
      {/* <Home /> */}
    </>
  );
};
