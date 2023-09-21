import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { Avatar } from "@chakra-ui/react";

export default function NavBar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <header className="py-2 px-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">MyGallery</h1>
        {isAuthenticated ? (
          <div className="flex gap-2 items-center">
            <span>
              <Avatar size="md" name={user?.name} />
            </span>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </nav>
    </header>
  );
}
