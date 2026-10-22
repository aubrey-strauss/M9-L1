import type { UserProfileCardProps } from '../../types';

export const UserProfileCard = ({
    user,
    showEmail = true,
    showRole = true,
    onEdit,
    children,

    //Implement proper prop handling and validation.
}: UserProfileCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 text-center">

            {/* add an avatar image */}
            <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full mx-auto" />

            {/* create user.name class */}
            <h3 className="text-lg font-semibold">{user.name}</h3>
            {/* TODO: user.email in a <p>, only if showEmail is true */}
            {showEmail && <p className="text-gray-600">{user.email}</p>}

            {/* user role if true */}
            {showRole && <p className="text-blue-500 font-medium">{user.role}</p>}

            {/*edit profile button */}
            {onEdit && (
                <button
                    onClick={() => onEdit(user.id)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Edit Profile
                </button>
            )}
            {children}
        </div>
    );
};
