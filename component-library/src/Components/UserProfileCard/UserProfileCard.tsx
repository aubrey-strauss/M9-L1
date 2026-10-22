import type { UserProfileCardProps } from '../../types';

export const UserProfileCard = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      {/* TODO: an <img> using user.avatarUrl and user.name for the alt text */}

      {/* TODO: user.name inside an <h3> */}

      {/* TODO: user.email in a <p>, only if showEmail is true */}

      {/* TODO: user.role in a <p>, only if showRole is true */}

      {/* TODO: an "Edit Profile" <button>, only if onEdit exists.
               Clicking it should call onEdit with user.id */}

      {children}
    </div>
  );
};
